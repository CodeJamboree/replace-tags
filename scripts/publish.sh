#!/bin/bash

# Exit immediately if any command fails
set -e

# Check if there are any uncommitted changes
if git diff-index --quiet HEAD --; then
    echo "No uncommitted changes found."
else
    echo "Will not publish while there are uncommitted changes in the repository."
    exit 1
fi

# Make sure code is formatted properly
npm run format
# Check if there are any uncommitted changes
if ! git diff-index --quiet HEAD --; then
    # Add all affected files to staging
    git add .
    # Commit the changelog
    git commit -m ":art:Formatted code using Prettier"
fi

# Make sure there are not lint warnings
npm run lint

# Check for unused or outdated dependencies
npm run depcheck

# Update package.json with any new contributors to the repository
node ./scripts/update-contributors

# Increment the version number
npm version patch

# Get package version
VERSION=$(node -p "require('./package.json').version")

# Add gitmoji to the commit
git commit --amend -m ":bookmark: v$VERSION"

# Update the tag to point to the latest commit
git tag -f "v$VERSION"

# Build dev & production versions
npm run build:all

# Enusure tests pass (Tests depend on build output, so we test after build)
npm run test

# update readme with new version
./scripts/update-readme.sh

# Update changelog and release notes
./scripts/update-changelog-and-release.sh

# Generate release documentation
./scripts/update-docs.sh

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
gh release create "v$VERSION" "$TARBALL" --title "Release v$VERSION" --notes-file "RELEASE_NOTES.md" --draft=false --prerelease=false

# Remove release notes
rm -f "RELEASE_NOTES.md"

# Remove tarball
rm -f "$TARBALL"

# Upload the built production file to the release
gh release upload "v$VERSION" "dist/index.min.js"

# Upload the built development file to the release
gh release upload "v$VERSION" "dist-dev/index.js"

# open the release page in the browser
gh release view "v$VERSION"
 
