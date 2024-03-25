import DollarSignWithCurlyBraces from "../DollarSignWithCurlyBraces";
import runTagStyleTests from "./runTagStyleTests";

describe("DollarSignWithCurlyBraces", () => {
  runTagStyleTests("${", "}", DollarSignWithCurlyBraces);
});
