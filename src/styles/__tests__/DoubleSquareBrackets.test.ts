import DoubleSquareBrackets from "../DoubleSquareBrackets";
import runTagStyleTests from "./runTagStyleTests";

describe("DoubleSquareBrackets", () => {
  runTagStyleTests("[[", "]]", DoubleSquareBrackets);
});
