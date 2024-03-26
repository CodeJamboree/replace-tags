import checkCondition from "./checkCondition";
import ReplaceTagsOptions from "./ReplaceTagsOptions";

const guardPatterns = ({
  tagEndPattern,
  tagStartPattern,
  tagPattern,
}: ReplaceTagsOptions) => {
  // Global Flag Checks
  checkCondition(
    !tagPattern.global,
    "tagPattern not flagged as global",
  );
  checkCondition(
    tagStartPattern.global,
    "tagStartPattern flagged as global",
  );
  checkCondition(
    tagEndPattern.global,
    "tagEndPattern flagged as global",
  );

  // Start of string or line checks
  checkCondition(
    tagPattern.source.startsWith("^"),
    "tagPattern starts with `^`",
  );
  checkCondition(
    !tagStartPattern.source.startsWith("^"),
    "tagStartPattern missing prefix `^`",
  );
  checkCondition(
    tagEndPattern.source.startsWith("^"),
    "tagEndPattern starts with `^`",
  );

  // End of string or line checks
  checkCondition(
    tagPattern.source.endsWith("$") &&
      !tagPattern.source.endsWith("\\$"),
    "tagPattern ends with unescaped `$`",
  );
  checkCondition(
    tagStartPattern.source.endsWith("$") &&
      !tagStartPattern.source.endsWith("\\$"),
    "tagStartPattern ends with unescaped `$`",
  );
  checkCondition(
    !tagEndPattern.source.endsWith("$"),
    "tagEndPattern missing suffix `$`",
  );
  checkCondition(
    tagEndPattern.source.endsWith("\\$"),
    "tagEndPattern ends with escaped `$`",
  );
};

export default guardPatterns;
