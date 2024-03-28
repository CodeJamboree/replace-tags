#!/bin/bash

# Exit immediately if any command fails
set -e

# Get package version
VERSION=$(node -p "require('./package.json').version")

# Replace version in CDN urls
# 'replace-tags@x.x.x' with `replace-tags@VERSION`` in README.md
# and save it to a temp file
sed -E "s/replace-tags@[0-9]+\.[0-9]+\.[0-9]+/replace-tags@$VERSION/g" README.md > temp.md

# Replace README.md with the temp file
mv temp.md README.md

# Stage README.md for commit
git add README.md

# Ammend the commit to the package version 
git commit -m ":memo: Update README.md with version $VERSION"

# Update the tag to point to the latest commit
git tag -f "v$VERSION"
