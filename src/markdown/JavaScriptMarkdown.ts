import Tag from "../Tag";

// "```js variable ```"
// "```javascript variable ```"
const JavaScriptMarkdown: Tag = {
  name: "JavaScript Markdown",
  openingTag: "```js",
  closingTag: "```",
  tagPattern: /```(js|javascript)\s+.*?\s+```/gis,
  tagStartPattern: /^```(js|javascript)\s+/i,
  tagEndPattern: /```$/,
};

export default JavaScriptMarkdown;
