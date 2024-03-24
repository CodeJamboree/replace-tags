#!/bin/bash

# Exit immediately if any command fails
set -e

# Make sure code is formatted properly
npm run format

# Make sure there are not lint warnings
npm run lint

# Check for unused or outdated dependencies
npm run depcheck

# Check if there are any uncommitted changes
if git diff-index --quiet HEAD --; then
    echo "No uncommitted changes found."
else
    echo "Error: There are uncommitted changes in the repository."
    exit 1
fi

# Update package.json with any new contributors to the repository
node ./scripts/update-contributors

# Increment the version number
npm version patch

# Get package version
VERSION=$(node -p "require('./package.json').version")

# Build dev version
npm run build:dev

# Build production version
npm run build

# Enusure tests pass (Tests depend on build output, so we test after build)
npm run test

# Push local commits
git push

# Push local tags
git push --tags

# Publish to NPM
npm publish --access public

# Create tarball
PACK_OUTPUT=$(npm pack)

TARBALL=$(echo "$PACK_OUTPUT" | grep -E '[^[:space:]]+\.tgz')

# Create release on Github
gh release create "v$VERSION" "$TARBALL" --title "Release v$VERSION" --notes "This is an automated release." --draft=false --prerelease=false

# Remove tarball
rm -f "$TARBALL"