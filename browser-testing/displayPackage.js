const openingTags = {
  Chevrons: "<<",
  PercentBrackets: "<%",
  Dunders: "__",
  AngleBrackets: "<<",
  AngleBracketsWithPercentSigns: "<%",
  Backticks: "``",
  CurlyBracesWithDollarSigns: "{$",
  CurlyBracesWithHashSymbols: "{#",
  DollarSignsWithSquareBrackets: "$[",
  DollarSignWithCurlyBraces: "${",
  DoubleAngle: "«",
  DoubleAtSigns: "@@",
  DoubleCaretsWithBraces: "^^{",
  DoubleColonsWithBraces: "::{",
  DoubleCurlyBraces: "{{",
  DoubleCurlyBracesWithPercentSign: "{{%",
  DoubleQuestionMarks: "??",
  DoubleSquareBrackets: "[[",
  DoubleSquareBracketsWithDollarSigns: "[[$",
  DoubleUnderscores: "__",
  ExclamationMarks: "!{",
  HashSymbolsWithCurlyBraces: "#{",
  HTMLComments: "<!--",
  Parentheses: "(",
  PercentSigns: "%{",
  VerticalBars: "|",
  Pointy: "👉",
  CurlyBracesWithExclamationMarks: "{!",
  SquareBrackets: "[",
  SquareBracketsWithColons: "[:",
  SquareBracketsWithHyphens: "[-",
  TripleCurlyBraces: "{{{",
};

const closingTags = {
  Chevrons: ">>",
  PercentBrackets: "%>",
  Dunders: "__",
  AngleBrackets: ">>",
  AngleBracketsWithPercentSigns: "%>",
  Backticks: "``",
  CurlyBracesWithDollarSigns: "$}",
  CurlyBracesWithHashSymbols: "#}",
  DollarSignsWithSquareBrackets: "]$",
  DollarSignWithCurlyBraces: "}",
  DoubleAngle: "»",
  DoubleAtSigns: "@@",
  DoubleCaretsWithBraces: "}^^",
  DoubleColonsWithBraces: "}::",
  DoubleCurlyBraces: "}}",
  DoubleCurlyBracesWithPercentSign: "%}}",
  DoubleQuestionMarks: "??",
  DoubleSquareBrackets: "]]",
  DoubleSquareBracketsWithDollarSigns: "$]]",
  DoubleUnderscores: "__",
  ExclamationMarks: "}!",
  HashSymbolsWithCurlyBraces: "}#",
  HTMLComments: "--!>",
  Parentheses: ")",
  PercentSigns: "}%",
  VerticalBars: "|",
  Pointy: "👈",
  CurlyBracesWithExclamationMarks: "!}",
  SquareBrackets: "]",
  SquareBracketsWithColons: ":]",
  SquareBracketsWithHyphens: "-]",
  TripleCurlyBraces: "}}}",
};
function displayPackage() {
  const lib = window["@codejamboree/replace-tags"];
  replaceTags = lib.replaceTags;
  styles = lib.styles;
  if (styles === undefined) {
    styles = [];
    Object.keys(lib).forEach(function (key) {
      if (lib[key].tagPattern !== undefined) {
        styles.push({
          name: key,
          openingTag: openingTags[key],
          closingTag: closingTags[key],
          ...lib[key],
        });
      }
    });
  }
  styles.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  // Setup tag style
  var tagStyle = document.getElementById("tagStyle");
  var selectedIndex = tagStyle.selectedIndex;
  tagStyle.innerHTML = "";
  styles.forEach(function (style, i) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent =
      style.openingTag +
      " name " +
      style.closingTag +
      " " +
      style.name;
    tagStyle.appendChild(option);
  });
  if (selectedIndex === -1 || selectedIndex >= styles.length)
    selectedIndex = 0;

  tagStyle.selectedIndex = selectedIndex;

  document.getElementById("version").textContent =
    lib.version ?? "Missing";
  document.getElementById("timestamp").textContent = lib.timestamp
    ? new Date(lib.timestamp).toLocaleString()
    : "Missing";
  document.getElementById("environment").textContent =
    lib.environment ?? "Missing";
  handleStyleChanged();
}
