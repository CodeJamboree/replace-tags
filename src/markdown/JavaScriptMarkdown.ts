import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "```js variable ```"
// "```javascript variable ```"
const JavaScriptMarkdown: ReplaceTagsOptions = {
  tagPattern: /```(js|javascript)\s+.*?\s+```/gis,
  tagStartPattern: /^```(js|javascript)\s+/i,
  tagEndPattern: /```$/,
};

export default JavaScriptMarkdown;
