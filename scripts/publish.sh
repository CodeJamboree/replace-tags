#!/bin/bash

# Exit immediately if any command fails
set -e

# Make sure code is formatted properly
npm run format

# Make sure there are not lint warnings
npm run lint

# Check for unused or outdated dependencies
npm run depcheck

# Update package.json with any new contributors to the repository
node ./scripts/update-contributors

# Enusure tests pass
npm run test

# Increment the version number
npm version patch

# Push the new tags or package.json commit
node ./scripts/push-tags

# Build dev version
npm run build:dev

# Build production version
npm run build

npm publish --access public
