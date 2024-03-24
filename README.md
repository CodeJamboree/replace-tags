# @codejamboree/replace-tags

A lightweight utility for replacing tags in a text string with values from an object.

Replaces `{{tag.paths}}` in templates

## Installation

You can install the package via npm:

```bash
npm install @codejamboree/replace-tags
```

Or using yarn:
```bash
yarn add @codejamboree/replace-tags
```

## Usage

```js
const replaceTags = require('@codejamboree/replace-tags');

// Define your text containing tags
const text = 'Hello {{user.name}}, welcome to {{website}}!';

// Define an object with values to replace the tags
const values = {
  user: {
    name: 'Lewis Moten',
  },
  website: 'CodeJamboree.com',
};

// Replace the tags in the text with values from the object
const replacedText = replaceTags(text, values);

console.log(replacedText);
// Output: Hello Lewis Moten, welcome to CodeJamboree.com!

```

## Usage with Custom Tag Patterns
```js
const { replaceTags } = require('@codejamboree/replace-tags');

// Define your text containing custom tags
const text = 'Hello %{user.name}%, welcome to %{website}%!';

// Define an object with values to replace the tags
const values = {
  user: {
    name: 'Lewis Moten',
  },
  website: 'CodeJamboree.com',
};

// Define custom options for tag parsing
const options = {
  tagPattern: /%\{([^%]+)\}%/g,
  tagStartPattern: /%\{/,
  tagEndPattern: /%\}/,
};

// Replace the custom tags in the text with values from the object using custom options
const replacedText = replaceTags(text, values, options);

console.log(replacedText);
// Output: Hello Lewis Moten, welcome to CodeJamboree.com!
```

## API

### `replaceTags(text: string, values: object, options?: object): string`

Replaces tags in the provided text with values from the values object.

- `text`: The text string containing tags to replace.
- `values`: An object containing values to replace the tags.
- `options` (optional): An object specifying options for tag parsing. It can include the following properties:
  - `tagPattern` (optional): A regular expression pattern to find tags in the text. Default is `/\{\{([^}]+)\}\}/g`.
  - `tagStartPattern` (optional): A regular expression pattern to find the start of a tag. Default is `/\{\{`.
  - `tagEndPattern` (optional): A regular expression pattern to find the end of a tag. Default is `\}\}`.

Returns the modified text string with tags replaced.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
