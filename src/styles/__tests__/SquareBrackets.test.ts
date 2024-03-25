import SquareBrackets from "../SquareBrackets";
import runTagStyleTests from "./runTagStyleTests";

xdescribe("SquareBrackets", () => {
  runTagStyleTests("[", "]", SquareBrackets);
});
