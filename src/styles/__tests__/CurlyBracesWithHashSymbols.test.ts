import CurlyBracesWithHashSymbols from "../CurlyBracesWithHashSymbols";
import runTagStyleTests from "./runTagStyleTests";

describe("CurlyBracesWithHashSymbols", () => {
  runTagStyleTests("{#", "#}", CurlyBracesWithHashSymbols);
});
