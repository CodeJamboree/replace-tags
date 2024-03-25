import DoubleAtSigns from "../DoubleAtSigns";
import runTagStyleTests from "./runTagStyleTests";

describe("DoubleAtSigns", () => {
  runTagStyleTests("@@", "@@", DoubleAtSigns);
});
