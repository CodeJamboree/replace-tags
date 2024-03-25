import Pointy from "../Pointy";
import runTagStyleTests from "./runTagStyleTests";

describe("Pointy", () => {
  runTagStyleTests("👉", "👈", Pointy);
});
