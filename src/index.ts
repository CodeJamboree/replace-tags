// Import functions
import findValueByPath from "./findValueByPath";
import replaceTags from "./replaceTags";

// Import styles
import AngleBrackets from "./styles/AngleBrackets";
import AngleBracketsWithPercentSigns from "./styles/AngleBracketsWithPercentSigns";
import Backticks from "./styles/Backticks";
import CurlyBracesWithDollarSigns from "./styles/CurlyBracesWithDollarSigns";
import CurlyBracesWithHashSymbols from "./styles/CurlyBracesWithHashSymbols";
import DollarSignWithCurlyBraces from "./styles/DollarSignWithCurlyBraces";
import DollarSignsWithSquareBrackets from "./styles/DollarSignsWithSquareBrackets";
import DoubleAngle from "./styles/DoubleAngle";
import DoubleAtSigns from "./styles/DoubleAtSigns";
import DoubleCaretsWithBraces from "./styles/DoubleCaretsWithBraces";
import DoubleColonsWithBraces from "./styles/DoubleColonsWithBraces";
import DoubleCurlyBraces from "./styles/DoubleCurlyBraces";
import DoubleCurlyBracesWithPercentSign from "./styles/DoubleCurlyBracesWithPercentSigns";
import DoubleQuestionMarks from "./styles/DoubleQuestionMarks";
import DoubleSquareBrackets from "./styles/DoubleSquareBrackets";
import DoubleSquareBracketsWithDollarSigns from "./styles/DoubleSquareBracketsWithDollarSigns";
import DoubleUnderscores from "./styles/DoubleUnderscores";
import ExclamationMarks from "./styles/ExclamationMarks";
import HashSymbolsWithCurlyBraces from "./styles/HashSymbolsWithCurlyBraces";
import HTMLComments from "./styles/HTMLComments";
import Parentheses from "./styles/Parentheses";
import PercentSigns from "./styles/PercentSigns";
import VerticalBars from "./styles/VerticalBars";
import Pointy from "./styles/Pointy";
import CurlyBracesWithExclamationMarks from "./styles/CurlyBracesWithExclamationMarks";
import SquareBrackets from "./styles/SquareBrackets";
import SquareBracketsWithColons from "./styles/SquareBracketsWithColons";
import SquareBracketsWithHyphens from "./styles/SquareBracketsWithHyphens";
import TripleCurlyBraces from "./styles/TripleCurlyBraces";

// Define version number
// Populated by Webpack DefinePlugin
export const version = __VERSION__;

// Epoxrt main function
export default replaceTags;

// Define style aliases
export const Chevrons = AngleBrackets;
export const PercentBrackets = AngleBracketsWithPercentSigns;
export const Dunders = DoubleUnderscores;

export {
  replaceTags,
  findValueByPath,
  AngleBrackets,
  AngleBracketsWithPercentSigns,
  Backticks,
  CurlyBracesWithDollarSigns,
  CurlyBracesWithHashSymbols,
  DollarSignsWithSquareBrackets,
  DollarSignWithCurlyBraces,
  DoubleAngle,
  DoubleAtSigns,
  DoubleCaretsWithBraces,
  DoubleColonsWithBraces,
  DoubleCurlyBraces,
  DoubleCurlyBracesWithPercentSign,
  DoubleQuestionMarks,
  DoubleSquareBrackets,
  DoubleSquareBracketsWithDollarSigns,
  DoubleUnderscores,
  ExclamationMarks,
  HashSymbolsWithCurlyBraces,
  HTMLComments,
  Parentheses,
  PercentSigns,
  VerticalBars,
  Pointy,
  CurlyBracesWithExclamationMarks,
  SquareBrackets,
  SquareBracketsWithColons,
  SquareBracketsWithHyphens,
  TripleCurlyBraces,
};
