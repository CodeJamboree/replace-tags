import DoubleSquareBrackets from "../DoubleSquareBrackets";
import runTagStyleTests from "./runTagStyleTests";

xdescribe("DoubleSquareBrackets", () => {
  runTagStyleTests("[[", "]]", DoubleSquareBrackets);
});
