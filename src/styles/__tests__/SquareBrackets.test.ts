import SquareBrackets from "../SquareBrackets";
import runTagStyleTests from "./runTagStyleTests";

describe("SquareBrackets", () => {
  runTagStyleTests("[", "]", SquareBrackets);
});
