import ReplaceTagsOptions from "./ReplaceTagsOptions";

interface IgetOptionsWithDefaults {
  (
    options: Partial<ReplaceTagsOptions> | undefined,
  ): ReplaceTagsOptions;
}

export default IgetOptionsWithDefaults;