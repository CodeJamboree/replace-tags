import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello %{variable}%"
const PercentSigns: ReplaceTagsOptions = {
  tagPattern: /\%\{([^}]+)\}\%/g,
  tagStartPattern: /^\%\{/,
  tagEndPattern: /\}\%$/
};

export default PercentSigns;