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

Or using a CDN (Content Delivery Network)

- jsDelivr
  - Production: https://cdn.jsdelivr.net/npm/@codejamboree/replace-tags@1.1.1/dist/index.min.js
  - Development: https://cdn.jsdelivr.net/npm/@codejamboree/replace-tags@1.1.1/dist-dev/index.js
- unpkg
  - Production: https://unpkg.com/@codejamboree/replace-tags@1.1.1/dist/index.min.js
  - Development: https://unpkg.com/@codejamboree/replace-tags@1.1.1/dist-dev/index.js

```html
<script src="https://cdn.jsdelivr.net/npm/@codejamboree/replace-tags@1.1.1/dist/index.min.js"></script>
```

## Usage

```js
const { replaceTags } = require("@codejamboree/replace-tags");

// Define your text containing tags
const text = "Hello {{user.name}}, welcome to {{website}}!";

// Define an object with values to replace the tags
const values = {
  user: {
    name: "John Doe",
  },
  website: "example.com",
};

// Replace the tags in the text with values from the object
const replacedText = replaceTags(text, values);

console.log(replacedText);
// Output: Hello John Doe, welcome to example.com!
```

### Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@codejamboree/replace-tags@1.1.1/dist/index.min.js"></script>
<script>
  var replaceTags = window["@codejamboree/replace-tags"].replaceTags;
  var text = replaceTags("Hello {{name}}!", { name: "World" });
  console.log(text);
  // Output: Hello World!
</script>
```

## Configuration Interface

A page is available to [try out replaceTags](https://codejamboree.github.io/replace-tags/test/index.html) by changing various configuration settings and review its performance.

### Unresolved Tags

If a tags property path cannot be resolved, the tag remains unchanged.

```js
const { replaceTags } = require("@codejamboree/replace-tags");
console.log(
  replaceTags("Hello {{missing.path}}!", { user: "John Doe" }),
);
// Output: Hello {{missing.path}}!
```

## Usage with Provided Tag Patterns

```js
const {
  replaceTags,
  PercentSigns,
} = require("@codejamboree/replace-tags");

// Replace percent sign tags
console.log(
  replaceTags(
    "Hello %{name}%",
    {
      name: "John Doe",
    },
    PercentSigns,
  ),
);
// Output: Hello John Doe
```

## Usage with Custom Tag Patterns

```js
const { replaceTags } = require("@codejamboree/replace-tags");

// Define an object with values to replace the tags
const values = {
  user: {
    name: "John Doe",
  },
};

// Define custom options for tag parsing
const options = {
  // find all "tag_start-> tag.name <-tag_end"
  tagPattern: /tag_start->.*?<-tag_end/g,
  // to remove starting "tag_start->"
  tagStartPattern: /^tag_start->/,
  // to remove ending "<-tag_end"
  tagEndPattern: /<-tag_end$/,
};

// Define your text containing custom tags
const text = "Hello tag_start-> user.name <-tag_end!";

// Replace the custom tags in the text
// with values from the object using custom options
console.log(replaceTags(text, values, options));
// Output: Hello John Doe!
```

An error will be thrown if the following conditions are not met:

1. The `tagPattern` must end with the `/g` flag.
1. The `tagStartPattern` must begin with `/^`.
1. The `tagEndpattern` must end with non-escaped `$/`.

## Tag Styles

| Style                               | Template                          |
| ----------------------------------- | --------------------------------- |
| AngleBrackets                       | `Hello << user.name >>`           |
| AngleBracketsWithPercentSigns       | `Hello <% user.name %>`           |
| Backticks                           | Hello \`\` user.name \`\`         |
| Chevrons                            | See AngleBrackets                 |
| CurlyBraces                         | `Hello { user.name }`             |
| CurlyBracesWithDollarSigns          | `Hello {$ user.name $}`           |
| CurlyBracesWithExclamationMarks     | `Hello {! user.name !}`           |
| CurlyBracesWithHashSymbols          | `Hello {# user.name #}`           |
| DollarSignsWithSquareBrackets       | `Hello $[ user.name ]$`           |
| DollarSignWithCurlyBraces           | `Hello ${ user.name }`            |
| DoubleAngle                         | `Hello « user.name »`             |
| DoubleAtSigns                       | `Hello @@ user.name @@`           |
| DoubleCaretsWithBraces              | `Hello ^^{ user.name }^^`         |
| DoubleColonsWithBraces              | `Hello ::{ user.name }::`         |
| DoubleCurlyBraces _(default)_       | `Hello {{ user.name }}`           |
| DoubleCurlyBracesWithPercentSign    | `Hello {{% user.name %}}`         |
| DoubleQuestionMarks                 | `Hello ?? user.name ??`           |
| DoubleSquareBrackets                | `Hello [[ user.name ]]`           |
| DoubleSquareBracketsWithDollarSigns | `Hello [[$ user.name $]]`         |
| DoubleUnderscores                   | `Hello __ user.name __`           |
| Dunders                             | See DoubleUnderscores             |
| ExclamationMarks                    | `Hello !{ user.name }!`           |
| HandleBars                          | See CurlyBraces                   |
| HashSymbolsWithCurlyBraces          | `Hello #{ user.name }#`           |
| HTMLComments                        | `Hello <!-- user.name --!>`       |
| Mustache                            | See DoubleCurlyBraces             |
| Parentheses                         | `Hello ( user.name )`             |
| PercentBrackets                     | See AngleBracketsWithPercentSigns |
| PercentSigns                        | `Hello %{ user.name }%`           |
| Pointy                              | `Hello 👉 user.name 👈`           |
| SquareBrackets                      | `Hello [ user.name ]`             |
| SquareBracketsWithColons            | `Hello [: user.name :]`           |
| SquareBracketsWithHyphens           | `Hello [- user.name -]`           |
| TripleCurlyBraces                   | `Hello {{{ user.name }}}`         |
| VerticalBars                        | `Hello \| user.name \|`           |

## Property Access Notation

The paths that may appear within tags allows for object traversal along the object to find the properties value in complex data structures. It can navigate through nested objects and nested arrays.

Ideally, paths can have multiple segments delimited by `.`. Each segment may have a part at the beginning that doesn't have a `[` character, and they can end with multiple sets of brackets `[` and `]` before a `.` indicating the next segment of the path.

Since each segment and index are evaluted against object keys and arrray indexes, Unconventional paths that wouldn't work accessing properties in JavaScript will still work in the path resolution.

| values                                   | path           | unconventional    |
| ---------------------------------------- | -------------- | ----------------- |
| `{"key": "value"}`                       | `key`          | `[key]`           |
| `["value"]`                              | `[0]`          | `0`               |
| `{"key": ["value"]}`                     | `key[0]`       | `key.0`           |
| `{"key": [["value"]]}`                   | `key[0][0]`    | `key.0.0`         |
| `{"parent": {"child": "value"}}`         | `parent.child` | `parent[child]`   |
| `{"key": () => "value" }`                | `key`          | `[key]`           |
| `{"parent": () => ({"child": "value"})}` | `parent.child` | `[parent][child]` |

The paths within the tags also allow for whitespace. You can either specify `{{key}}` or `{{ key }}` for easier readability, but you may not have whitespace within the path such as `{{parent. child .name}}`.

## API

For detailed API documentation, pleae refer to the [documentation](https://codejamboree.github.io/replace-tags/).

### `replaceTags(text: string, values: object, options?: ReplaceTagsOptions): string`

Replaces tags in the provided text with values from the values object.

- `text`: The text string containing tags to replace.
- `values`: An object or JSON object containing values to replace the tags.
- `options` (optional): An object specifying options for tag parsing. Default is DoubleCurlyBraces. It can include the following properties:
  - `tagPattern` (optional): A regular expression pattern to find tags in the text. Default is DoubleCurlyBraces.tagPattern.
  - `tagStartPattern` (optional): A regular expression pattern to find the start of a tag. Default is DoubleCurlyBraces.tagStartPattern.
  - `tagEndPattern` (optional): A regular expression pattern to find the end of a tag. Default is DoubleCurlyBraces.tagEndPattern.
  - `cache` (optional): Flag indicating if values are to be cached for subsequent calls. Default is false.
  - `onMissingPath` (optional): A callback to resolve values for paths that found nothing. Default is to retain the tag. `(path, tag) => tag`

Returns the modified text string with tags replaced.

### Unconventional paths

- `0` The same as `[0]`
- `users.0.name` The same as `users[0].name`
- `user[name]` The same as `users.name`

## Missing Values

If a value is not found for a given tag, the tag will remain in its original form. This behavior can be overridden to replace it with empty text, throw an error, or other custom logic by setting the `onMissingPath` callback. It receives both the `path` and `tag` that was unable to be resolved. The returned value is used in replacing the tag in the original template.

```js
const { replaceTags } = require("@codejamboree/replace-tags");
const values = {};
const template = "Hello {{ this.tag.is.missing }}!";
const onMissingPath = function (path, tag) {
  console.log(path);
  console.log(tag);
  return "Unknown";
};
const options = { onMissingPath };

console.log(replaceTags(template, values, options));
// Output: this.tag.is.missing
// Output: {{ this.tag.is.missing }}
// Output: Hello Unknown!
```

## Object Values

Any value that resolves as an object will result as that object being converted to JSON.

```js
const { replaceTags } = require("@codejamboree/replace-tags");

const values = {
  user: {
    name: "John Doe",
  },
};
const text = "user = {{user}}";

// Replace the tags in the text with values from the object
console.log(replaceTags(text, values));
// Output: user = {"name":"John Doe"}
```

## Dynamic Values

The `replaceTags` function supports dynamic behavior by allowing functions to be called during property resolution. If a value is found to be a function, it will be called. The value returned is then used to continue resolving the property path.

### `valueGetter(key: string, currentPath: string, fullPath: string): unknown`

```js
const { replaceTags } = require("@codejamboree/replace-tags");

const values = {
  user: {
    birthYear: 1990,
    getDecade: function (key, currentPath, fullPath) {
      if (key === "getDecade") {
        return Math.floor((this.birthYear % 100) / 10);
      } else {
        return undefined;
      }
    },
  },
};
const text = "How was the {{user.getDecade}}0's?";

// Replace the tags in the text with values from the object
console.log(replaceTags(text, values));
// Output: How was the 90's?
```

### Cached Values

Values along a path are cached for optimization. Even when the path has differing whitespace within the tags. Tag paths used multiple times will resolve to the same value. Using functions as values demonstrates this behavior.

```js
const { replaceTags } = require("@codejamboree/replace-tags");
let count = 0;
const getCount = () => {
  console.log("Getting Count");
  return ++count;
};
const values = { getCount };
const text = "Count 1: {{getCount}}; Count 2: {{ getCount }}";
console.log(replaceTags(text, values));
// Output: Getting Count
// Output: Count 1: 1; Count 2: 1
// Note: "Getting Count" was only logged once.
```

Note: Even when the `cache` flag is set to false for subsequent calls to `replaceTags`, the internal cache is still used during each individual call.

### Caching Option

The `cache` flag may be set to true to cache resolved lookup values betweeen subsequent calls. This is optimal when reusing the same `values` between each call.

```js
const {
  replaceTags,
  DoubleAngle,
} = require("@codejamboree/replace-tags");
const original = { name: "John Doe" };
const newValues = { name: "Jane Smith" };

// Replace tags
console.log(replaceTags("{{name}}", original));
// Output: John Doe

// Start caching values
console.log(replaceTags("{{name}}", newValues, { cache: true }));
// Output: Jane Smith

// Use previously resolved values
console.log(replaceTags("{{name}}", original, { cache: true }));
// Output: Jane Smith
// Actual: John Doe

// Use caching with a predefined tag style
console.log(
  replaceTags("«name»", original, {
    ...DoubleAngle,
    cache: true,
  }),
);
// Output: Jane Smith
// Actual: John Doe

console.log(replaceTags("{{name}}", original));
// Output: John Doe
```

## Passing Values as JSON

You may pass a JSON string as the values to be evaluated.

```js
const { replaceTags } = require("@codejamboree/replace-tags");

// Define your text containing tags
const text = "Hello {{user.name}}!";

// Define a JSON string with values to replace the tags
const values = `{"user": {"name": "John Doe"}}`;

// Replace the tags in the text with values from the object
const replacedText = replaceTags(text, values);

console.log(replacedText);
// Output: Hello John Doe!
```

## Find Value By Path

A method is also provided for you to retrieve the resolved path values.

### `findValueByPath(source: object, path: string): unknown`

```js
const { findValueByPath } = require("@codejamboree/replace-tags");
console.log(
  findValueByPath({ user: { name: "John Doe" } }, "user.name"),
);
// Output: John Doe
```

### Caching

Subsequent calls to `findValueByPath` will return cached values. You may use `clearCache` to clear the cache.

```js
const {
  findValueByPath,
  clearCache,
} = require("@codejamboree/replace-tags");

// Define objects with values to find
const original = { name: "John Doe" };
const newValues = { name: "Jane Smith" };

// Find the value in original
console.log(findValueByPath(original, "name"));
// Output: John Doe

// Find the value in newValues
console.log(findValueByPath(newValues, "name"));
// Output: John Doe
// Actual: Jane Smith

// clear the cache
clearCache();

// Find the value in newValues
console.log(findValueByPath(newValues, "name"));
// Output: Jane Smith
```

## Known Issues

### Paired Delimiters

Tag Styles that have a paried tag with the same opening and closing tags (ie `__` in `__dunder__`) are sometimes unable to parse tags directly following one after another. (ie `__key1____key2__`) It is recomended to have some whitespace between these tags. (ie `__key1__ __key2__`).

```js
const {
  replaceTags,
  DoubleUnderscores,
} = require("@codejamboree/replace-tags");

// Define values to replace the tags
const values = {
  key1: "## 1 ##",
  key2: "-- 2 --",
};

// Replace the tags in the text with values from the object
console.log(
  replaceTags("__key1____key2__", values, DoubleUnderscores),
);
// Output: __key1____key2__
// Expected: ## 1 ##-- 2 --

// Replace the tags in the text with values from the object
console.log(
  replaceTags("__key1__ __key2__", values, DoubleUnderscores),
);
// Output: ## 1 ## -- 2 --
```

## Changelog

For the latest changes, updates, and improvements to this project, please refer to the [Changelog](CHANGELOG.md).

## License

Copyright (c) 2024 Code Jamboree LLC

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

## Acknowledgments

Portions of the source code were generated with the assistance of

- [OpenAI's ChatGPT](https://chat.openai.com/)
- [GitHub Copilot](https://copilot.github.com/)
- [typedoc](https://typedoc.org/)
- [vscode-jsdoc](https://github.com/lllllllqw/vscode-jsdoc)
