import findValueByPath from "./findValueByPath";
import replaceTags from "./replaceTags";
import AngleBrackets from "./styles/AngleBrackets";
import AngleBracketsWithPercentSigns from "./styles/AngleBracketsWithPercentSigns";
import Backticks from "./styles/Backticks";
import CurlyBracesWithDollarSigns from "./styles/CurlyBracesWithDollarSigns";
import CurlyBracesWithPoundSigns from "./styles/CurlyBracesWithPoundSigns";
import DollarSigns from "./styles/DollarSigns";
import DollarSignWithCurlyBraces from "./styles/DollarSignWithCurlyBraces";
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
import PipeSymbols from "./styles/PipeSymbols";
import PointingHands from "./styles/PointingHands";
import SingleCurlyBracesWithExclamationMarks from "./styles/SingleCurlyBracesWithExclamationMarks";
import SquareBrackets from "./styles/SquareBrackets";
import SquareBracketsWithColons from "./styles/SquareBracketsWithColons";
import SquareBracketsWithDashes from "./styles/SquareBracketsWithDashes";
import TripleCurlyBraces from "./styles/TripleCurlyBraces";

try {
  if (process?.argv?.length > 2) {
    const text = process.argv[2];
    const values = JSON.stringify(process.argv[3]);
    console.log(replaceTags(text, values));
  }
} catch (e) {
  console.log("Error processing", e);
}

const version = __VERSION__;
export default replaceTags;
export {
  version,
  replaceTags,
  findValueByPath,
  AngleBrackets,
  AngleBracketsWithPercentSigns,
  Backticks,
  CurlyBracesWithDollarSigns,
  CurlyBracesWithPoundSigns,
  DollarSigns,
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
  PipeSymbols,
  PointingHands,
  SingleCurlyBracesWithExclamationMarks,
  SquareBrackets,
  SquareBracketsWithColons,
  SquareBracketsWithDashes,
  TripleCurlyBraces,
};
