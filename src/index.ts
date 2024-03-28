// Import functions
import findValueByPath from "./findValueByPath";
import replaceTags from "./replaceTags";
import { clear } from "./cache";

// Import styles
import AngleBrackets from "./styles/AngleBrackets";
import AngleBracketsWithPercentSigns from "./styles/AngleBracketsWithPercentSigns";
import Backticks from "./styles/Backticks";
import Chevrons from "./styles/Chevrons";
import CurlyBraces from "./styles/CurlyBraces";
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
import Dunders from "./styles/Dunders";
import ExclamationMarks from "./styles/ExclamationMarks";
import HashSymbolsWithCurlyBraces from "./styles/HashSymbolsWithCurlyBraces";
import Handlebars from "./styles/Handlebars";
import HTMLComments from "./styles/HTMLComments";
import Mustache from "./styles/Mustache";
import Parentheses from "./styles/Parentheses";
import PercentBrackets from "./styles/PercentBrackets";
import PercentSigns from "./styles/PercentSigns";
import VerticalBars from "./styles/VerticalBars";
import Pointy from "./styles/Pointy";
import CurlyBracesWithExclamationMarks from "./styles/CurlyBracesWithExclamationMarks";
import SquareBrackets from "./styles/SquareBrackets";
import SquareBracketsWithColons from "./styles/SquareBracketsWithColons";
import SquareBracketsWithHyphens from "./styles/SquareBracketsWithHyphens";
import TripleCurlyBraces from "./styles/TripleCurlyBraces";

// Build Varialbles populated by Webpack DefinePlugin
// Define version number
export const version = __VERSION__;
// Define timestamped build
export const timestamp = __TIMESTAMP__;
// Define environment build
export const environment = __ENVIRONMENT__;

// Epoxrt main function
export default replaceTags;

// Export utility functions
export const clearCache = clear;

// Export styles
export const styles = [
  AngleBrackets,
  AngleBracketsWithPercentSigns,
  Backticks,
  Chevrons,
  CurlyBraces,
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
  Dunders,
  ExclamationMarks,
  Handlebars,
  HashSymbolsWithCurlyBraces,
  HTMLComments,
  Mustache,
  Parentheses,
  PercentBrackets,
  PercentSigns,
  VerticalBars,
  Pointy,
  CurlyBracesWithExclamationMarks,
  SquareBrackets,
  SquareBracketsWithColons,
  SquareBracketsWithHyphens,
  TripleCurlyBraces,
];

export {
  replaceTags,
  findValueByPath,
  AngleBrackets,
  AngleBracketsWithPercentSigns,
  Backticks,
  Chevrons,
  CurlyBraces,
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
  Dunders,
  ExclamationMarks,
  Handlebars,
  HashSymbolsWithCurlyBraces,
  HTMLComments,
  Mustache,
  Parentheses,
  PercentBrackets,
  PercentSigns,
  VerticalBars,
  Pointy,
  CurlyBracesWithExclamationMarks,
  SquareBrackets,
  SquareBracketsWithColons,
  SquareBracketsWithHyphens,
  TripleCurlyBraces,
};
