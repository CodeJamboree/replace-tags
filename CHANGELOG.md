# Changelog

## [Unreleased]

### Added

- `CurlyBraces` ie `{ name }`
- `Mustache` alias for `DoubleCurlyBraces` ie `{{ name }}`
- `Handlebars` alias for `CurlyBraces` ie `{ name }`
- Tag styles now have `openingTag`, `closingTag` and `name` properties.

## [1.1.1] - 2024-03-27

### Added

- Cache resolved values for quicker processing
- Helper function to clear the internal cache
- Option to cache results between calls with the `cache: true` flag.
- Various changes to build scripts
- Generate and Publish [API Documentation](https://codejamboree.github.io/replace-tags/) during builds
- Example scripts are only tested via `npm test:examples`
- Tests with prettier configuration print width
- Resolved values as objects will display as JSON

## [1.0.22] - 2024-03-26

### Added

- Link to changelog
- Process Nested Arrays `{{key[0][1][2]}}`
- Process array segments without keys `{{[0]}}`
- More tests for each tag style
- [example.js](./example.js) for [RunKit](https://npm.runkit.com/%40codejamboree%2Freplace-tags).
- Test [README](./README.md) samples with both `main` and `devMain`.
- Guard against stateful regular expressions
- Guard against regular expressions with wrong flags or start/end of line/text
- Add tests to verify [example.js](./example.js) has expected output

### Fixed

- `DollarSignWithCurlyBraces` works with paths containing `$`
- `DollarSignWithSquareBrackets` works with paths containing `[` and `]`
- `CurlyBracesWithDollarSigns` works with paths containing `$`
- `DoubleSquareBracketsWithDollarSigns` works with paths containing `$`
- `DoubleUnderscores` works with paths containing `_`
- `DoubleSquareBrackets` works with paths containing `[` and `]`
- `SquareBrackets` works with paths containing `[` and `]`

## [1.0.21] - 2024-03-25

### Changed

- Updated build process for interacting with git

## [1.0.20] - 2024-03-25

### Added

- JSDoc comments to functions
- Added code examples for each tag style
- `Chevrons` alias for `AngleBrackets`
- `PercentBrackets` alias for `AngleBracketsWithPercentSigns`
- `Dunders` alias for `DoubleUnderscore`
- [CHANGELOG](./CHANGELOG.md)

### Changed

- Renamed `CurlyBracesWithPoundSigns` to `CurlyBracesWithHashSymbols`
- Renamed `DollarSigns` to `DollarSignsWithSquareBrackets`
- Renamed `PipeSymbols` to `VerticalBars`
- Renamed `PointingHands` to `Pointy`
- Renamed `SingleCurlyBracesWithExlamationMarks` to `CurlyBracesWithExclamationMarks`
- Renamed `SquareBracketsWithDashes` to `SquareBracketsWithHyphens`
- Associate latest changes as release notes on github
- Add gitmoji to automated commits

# [1.0.19] - 2024-03-25

### Fixed

- JavaScript examples in [README.md](./README.md)

# [1.0.18] - 2024-03-24

- Setup package to indicate it has typescript definitions

# [1.0.17] - 2024-03-24

- Support JSON string passed as values.
- Automate creating releases on GitHub
