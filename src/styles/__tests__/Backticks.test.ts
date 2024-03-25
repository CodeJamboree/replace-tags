import Backticks from "../Backticks";
import runTagStyleTests from "./runTagStyleTests";

describe("Backticks", () => {
  runTagStyleTests("``", "``", Backticks);
});
