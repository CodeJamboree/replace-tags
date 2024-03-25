#!/bin/bash

# -------------------------------------------
# Update changelog and create release notes
# -------------------------------------------

# Exit immediately if any command fails
set -e

# Check if there are any uncommitted changes
if git diff-index --quiet HEAD --; then
    # Everything good to go
else
    echo "Error: There are uncommitted changes in the repository."
    exit 1
fi

CHANGELOG="CHANGELOG.md"
RELEASE_NOTES="RELEASE_NOTES.md"

# Get today's date in YYYY-MM-DD format
DATE=$(date +'%Y-%m-%d')

# Get package version
VERSION=$(node -p "require('./package.json').version")

# Define header for unreleased
UNRELEASED="## [Unreleased]";
# Escape special characters
UNRELEASED=$(printf '%s\n' "$UNRELEASED" | sed -e 's/[]\/$*.^[]/\\&/g')

# Copy the unreleased changes to the release notes
sed -n "/$UNRELEASED/,/# \[/ {1! {/$UNRELEASED/d; /# \[/d;}; p;}" "$CHANGELOG" > "$RELEASE_NOTES"

# Create a new header for the release
RELEASE_HEADER="## [$VERSION] - $DATE"

# Escape special characters
RELEASE_HEADER=$(printf '%s\n' "$RELEASE_HEADER" | sed -e 's/[]\/$*.^[]/\\&/g')

# Insert the version number after "## [Unreleased]"
sed "s/$UNRELEASED/$UNRELEASED\n\n$RELEASE_HEADER/" "$CHANGELOG" > "$CHANGELOG.tmp"

# Overwrite the changelog with the updated temp file
mv "$CHANGELOG.tmp" "$CHANGELOG"

# Add changelog to staging
git add "$CHANGELOG"

# Commit the changelog
git commit -m "Add version header for v$VERSION"

# Create header for release notes
HEADER="# Current Release\n\n$RELEASE_HEADER\n";

# Add header to release notes
echo -e "$HEADER$(cat $RELEASE_NOTES)" > "$RELEASE_NOTES"