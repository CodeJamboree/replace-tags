import DoubleCurlyBraces from "../DoubleCurlyBraces";
import runTagStyleTests from "./runTagStyleTests";

describe("DoubleCurlyBraces", () => {
  runTagStyleTests("{{", "}}", DoubleCurlyBraces);
});
