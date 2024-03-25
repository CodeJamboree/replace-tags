import CurlyBracesWithExclamationMarks from "../CurlyBracesWithExclamationMarks";
import runTagStyleTests from "./runTagStyleTests";

describe("CurlyBracesWithExclamationMarks", () => {
  runTagStyleTests("{!", "!}", CurlyBracesWithExclamationMarks);
});
