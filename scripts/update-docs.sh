#!/bin/bash

# Exit immediately if any command fails
set -e

# Get package version
VERSION=$(node -p "require('./package.json').version")

# Create documentation
npm run doc

# Store the original .gitignore content
ORIGINAL_IGNORE=$(cat .gitignore)

# Create docs/test directory
mkdir -p docs/test

# Copy all files from browser-testing to docs/test
cp -r browser-testing/* docs/test/

# Create docs/dist directory
mkdir -p docs/dist

# Copy dist files to docs/dist
cp -r dist/index.min.js docs/dist/index.min.js
cp -r dist/index.min.js.map docs/dist/index.min.js.map

# Create docs/dist-dev directory
mkdir -p docs/dist-dev

# Copy dist-dev files to docs/dist-dev
cp -r dist-dev/index.js docs/dist-dev/index.js
cp -r dist-dev/index.js.map docs/dist-dev/index.js.map

# Stage all files in the "docs" folder for commit, including ignored dist folder
git add docs/* -f

# Ammend the commit to the package version 
git commit -m ":memo: Update documentation $VERSION"

# Update the tag to point to the latest commit
git tag -f "v$VERSION"
