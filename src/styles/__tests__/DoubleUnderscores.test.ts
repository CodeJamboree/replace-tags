import DoubleUnderscores from "../DoubleUnderscores";
import runTagStyleTests from "./runTagStyleTests";

describe("DoubleUnderscores", () => {
  runTagStyleTests("__", "__", DoubleUnderscores);
});
