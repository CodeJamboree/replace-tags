import HashSymbolsWithCurlyBraces from "../HashSymbolsWithCurlyBraces";
import runTagStyleTests from "./runTagStyleTests";

describe("HashSymbolsWithCurlyBraces", () => {
  runTagStyleTests("#{", "}#", HashSymbolsWithCurlyBraces);
});
