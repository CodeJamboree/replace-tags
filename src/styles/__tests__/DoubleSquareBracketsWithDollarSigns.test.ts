import DoubleSquareBracketsWithDollarSigns from "../DoubleSquareBracketsWithDollarSigns";
import runTagStyleTests from "./runTagStyleTests";

describe("DoubleSquareBracketsWithDollarSigns", () => {
  runTagStyleTests("[[$", "$]]", DoubleSquareBracketsWithDollarSigns);
});
