# @codejamboree/replace-tags

A lightweight utility for replacing tags in a text string with values from an object.

Replaces `{{tag.paths}}` in templates by default, with many styles available and customizable.

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
const replaceTags = require("@codejamboree/replace-tags");

// Define your text containing tags
const text = "Hello {{user.name}}, welcome to {{website}}!";

// Define an object with values to replace the tags
const values = {
  user: {
    name: "Lewis Moten",
  },
  website: "CodeJamboree.com",
};

// Replace the tags in the text with values from the object
const replacedText = replaceTags(text, values);

console.log(replacedText);
// Output: Hello Lewis Moten, welcome to CodeJamboree.com!
```

## Usage with Provided Tag Patterns

```js
const replaceTags, { PercentSigns } = require("@codejamboree/replace-tags");

// Define your text containing tags
const text = "Hello %{user.name}%, welcome to %{website}%!";

// Define an object with values to replace the tags
const values = {
  user: {
    name: "Lewis Moten",
  },
  website: "CodeJamboree.com",
};

// Replace the tags in the text with values from the object
const replacedText = replaceTags(text, values);

console.log(replacedText);
// Output: Hello Lewis Moten, welcome to CodeJamboree.com!
```

## Usage with Custom Tag Patterns

```js
const replaceTags = require("@codejamboree/replace-tags");

// Define your text containing custom tags
const text = "Hello %{user.name}%, welcome to %{website}%!";

// Define an object with values to replace the tags
const values = {
  user: {
    name: "Lewis Moten",
  },
  website: "CodeJamboree.com",
};

// Define custom options for tag parsing
const options = {
  tagPattern: /%\{([^%]+)\}%/g, // find all "%{ tag.name }%"
  tagStartPattern: /^%\{/, // to remove starting "%{"
  tagEndPattern: /%\}$/, // to remove ending "}%"
};

// Replace the custom tags in the text with values from the object using custom options
const replacedText = replaceTags(text, values, options);

console.log(replacedText);
// Output: Hello Lewis Moten, welcome to CodeJamboree.com!
```

## Tag Styles

| Style                                 | Template                    |
| ------------------------------------- | --------------------------- |
| AngleBrackets                         | `Hello << user.name >>`     |
| AngleBracketsWithPercentSigns         | `Hello <% user.name %>`     |
| Backticks                             | Hello `\`\` user.name \`\`  |
| CurlyBracesWithDollarSigns            | `Hello {$ user.name $}`     |
| CurlyBracesWithPoundSigns             | `Hello {# user.name #}`     |
| DollarSigns                           | `Hello $[ user.name ]$`     |
| DollarSignWithCurlyBraces             | `Hello ${ user.name }`      |
| DoubleAngle                           | `Hello « user.name »`       |
| DoubleAtSigns                         | `Hello @@ user.name @@`     |
| DoubleCaretsWithBraces                | `Hello ^^{ user.name }^^`   |
| DoubleColonsWithBraces                | `Hello ::{ user.name }::`   |
| DoubleCurlyBraces _(default)_         | `Hello {{ user.name }}`     |
| DoubleCurlyBracesWithPercentSign      | `Hello {{% user.name %}}`   |
| DoubleQuestionMarks                   | `Hello ?? user.name ??`     |
| DoubleSquareBrackets                  | `Hello [[ user.name ]]`     |
| DoubleSquareBracketsWithDollarSigns   | `Hello [[$ user.name $]]`   |
| DoubleUnderscores                     | `Hello __ user.name __`     |
| ExclamationMarks                      | `Hello !{ user.name }!`     |
| HashSymbolsWithCurlyBraces            | `Hello #{ user.name }#`     |
| HTMLComments                          | `Hello <!-- user.name --!>` |
| Parentheses                           | `Hello ( user.name )`       |
| PercentSigns                          | `Hello %{ user.name }%`     |
| PipeSymbols                           | `Hello \| user.name \|`     |
| PointingHands                         | `Hello 👉 user.name 👈`     |
| SingleCurlyBracesWithExclamationMarks | `Hello {! user.name !}`     |
| SquareBrackets                        | `Hello [ user.name ]`       |
| SquareBracketsWithColons              | `Hello [: user.name :]`     |
| SquareBracketsWithDashes              | `Hello [- user.name -]`     |
| TripleCurlyBraces                     | `Hello {{{ user.name }}}`   |

## API

### `replaceTags(text: string, values: object, options?: ReplaceTagsOptions): string`

Replaces tags in the provided text with values from the values object.

- `text`: The text string containing tags to replace.
- `values`: An object containing values to replace the tags.
- `options` (optional): An object specifying options for tag parsing. Default is DoubleCurlyBraces. It can include the following properties:
  - `tagPattern` (optional): A regular expression pattern to find tags in the text. Default is DoubleCurlyBraces.tagPattern.
  - `tagStartPattern` (optional): A regular expression pattern to find the start of a tag. Default is DoubleCurlyBraces.tagStartPattern.
  - `tagEndPattern` (optional): A regular expression pattern to find the end of a tag. Default is DoubleCurlyBraces.tagEndPattern.

Returns the modified text string with tags replaced.

## Property Paths

Paths can can traverse both objects and arrays.

- `user.name` looks for the key `user` on an object, and then looks for `name`.
- `users[0].name` looks for the first value on a `users` array, and returns their name.
- `users.0.name` looks first the first value on a `users` array or object, and returns their name

## Dynamic Values

The `replaceTags` function supports dynamic behavior by allowing functions to be called during property resolution. If a value is found to be a function, it will be called. The value returned is then used to continue resolving the property path.

### `getValue(key: string, currentPath: string, fullPath: string): unknown`

```js
const data = {
  user: {
    name: "John",
    birthYear: 1990,
    getAge: function (key, currentPath, fullPath) {
      if (key === "getAge") {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
      } else {
        return undefined;
      }
    },
  },
};
const text = "Hello, {{user.name}}, you are {{user.getAge}} years old!";
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
