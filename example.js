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
