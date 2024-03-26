#!/bin/bash

VERSION="$1"

# Exit immediately if any command fails
set -e

# Create documentation
npm run doc

# Store the original .gitignore content
ORIGINAL_IGNORE=$(cat .gitignore)

# Remove the "docs" line from .gitignore
sed -i '' '/^docs$/d' .gitignore

# Stage all files in the "docs" folder for commit
git add docs/*

# Ammend the commit to the package version 
git commit -m ":memo: Update documentation"

# Update the tag to point to the latest commit
git tag -f "v$VERSION"

# Restore the original .gitignore content
echo "$ORIGINAL_IGNORE" > .gitignore
