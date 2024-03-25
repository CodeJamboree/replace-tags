import replaceTags from "../replaceTags";
import AngleBrackets from "../styles/AngleBrackets";
import AngleBracketsWithPercentSigns from "../styles/AngleBracketsWithPercentSigns";
import Backticks from "../styles/Backticks";
import CurlyBracesWithDollarSigns from "../styles/CurlyBracesWithDollarSigns";
import CurlyBracesWithPoundSigns from "../styles/CurlyBracesWithPoundSigns";
import DollarSigns from "../styles/DollarSigns";
import DollarSignWithCurlyBraces from "../styles/DollarSignWithCurlyBraces";
import DoubleAngle from "../styles/DoubleAngle";
import DoubleAtSigns from "../styles/DoubleAtSigns";
import DoubleCaretsWithBraces from "../styles/DoubleCaretsWithBraces";
import DoubleColonsWithBraces from "../styles/DoubleColonsWithBraces";
import DoubleCurlyBracesWithPercentSign from "../styles/DoubleCurlyBracesWithPercentSigns";
import DoubleQuestionMarks from "../styles/DoubleQuestionMarks";
import DoubleSquareBrackets from "../styles/DoubleSquareBrackets";
import DoubleSquareBracketsWithDollarSigns from "../styles/DoubleSquareBracketsWithDollarSigns";
import DoubleUnderscores from "../styles/DoubleUnderscores";
import ExclamationMarks from "../styles/ExclamationMarks";
import HashSymbolsWithCurlyBraces from "../styles/HashSymbolsWithCurlyBraces";
import HTMLComments from "../styles/HTMLComments";
import Parentheses from "../styles/Parentheses";
import PercentSigns from "../styles/PercentSigns";
import PipeSymbols from "../styles/PipeSymbols";
import PointingHands from "../styles/PointingHands";
import SingleCurlyBracesWithExclamationMarks from "../styles/SingleCurlyBracesWithExclamationMarks";
import SquareBrackets from "../styles/SquareBrackets";
import SquareBracketsWithColons from "../styles/SquareBracketsWithColons";
import SquareBracketsWithDashes from "../styles/SquareBracketsWithDashes";
import TripleCurlyBraces from "../styles/TripleCurlyBraces";

describe("styles", () => {
  const values = { name: "John Doe" };

  it("replaces {{{triple curley bracess}}}", () => {
    const text = "Hello {{{name}}}!";
    expect(replaceTags(text, values, TripleCurlyBraces)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces %{percent signs}%", () => {
    const text = "Hello %{name}%!";
    expect(replaceTags(text, values, PercentSigns)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces $[dollar signs]$", () => {
    const text = "Hello $[name]$!";
    expect(replaceTags(text, values, DollarSigns)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces $[square brackets]$", () => {
    const text = "Hello [name]!";
    expect(replaceTags(text, values, SquareBrackets)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces <<angle brackets>>", () => {
    const text = "Hello <<name>>!";
    expect(replaceTags(text, values, AngleBrackets)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces ``back ticks``", () => {
    const text = "Hello ``name``!";
    expect(replaceTags(text, values, Backticks)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces (parentheses)", () => {
    const text = "Hello (name)!";
    expect(replaceTags(text, values, Parentheses)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces |pipe symbols|", () => {
    const text = "Hello |name|!";
    expect(replaceTags(text, values, PipeSymbols)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces [:square brackets with colons:]", () => {
    const text = "Hello [:name:]!";
    expect(replaceTags(text, values, SquareBracketsWithColons)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces !{Exclamation Marks}!", () => {
    const text = "Hello !{name}!!";
    expect(replaceTags(text, values, ExclamationMarks)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces ${Dollar Sign with Curly Braces}", () => {
    const text = "Hello ${name}!";
    expect(replaceTags(text, values, DollarSignWithCurlyBraces)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces <!--HTML Comments-->", () => {
    const text = "Hello <!--name--!>!";
    expect(replaceTags(text, values, HTMLComments)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces {$Curly Braces with Dollar Signs$}", () => {
    const text = "Hello {$name$}!";
    expect(
      replaceTags(text, values, CurlyBracesWithDollarSigns),
    ).toBe("Hello John Doe!");
  });
  it("replaces [[Double Square Brackets]]", () => {
    const text = "Hello [[name]]!";
    expect(replaceTags(text, values, DoubleSquareBrackets)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces <% Angle Brackets with Percent Signs %>", () => {
    const text = "Hello <%name%>!";
    expect(
      replaceTags(text, values, AngleBracketsWithPercentSigns),
    ).toBe("Hello John Doe!");
  });
  it("replaces [- Square Brackets with Dashes -]", () => {
    const text = "Hello [-name-]!";
    expect(replaceTags(text, values, SquareBracketsWithDashes)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces __ Double Underscores __", () => {
    const text = "Hello __name__!";
    expect(replaceTags(text, values, DoubleUnderscores)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces @@ Double At Signs @@", () => {
    const text = "Hello @@name@@!";
    expect(replaceTags(text, values, DoubleAtSigns)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces {{% Double Curly Braces with Percent Sign %}}", () => {
    const text = "Hello {{%name%}}!";
    expect(
      replaceTags(text, values, DoubleCurlyBracesWithPercentSign),
    ).toBe("Hello John Doe!");
  });
  it("replaces ::{ Double Colons with Braces }::", () => {
    const text = "Hello ::{name}::!";
    expect(replaceTags(text, values, DoubleColonsWithBraces)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces [[$ Double Square Brackets with Dollar Signs $]]", () => {
    const text = "Hello [[$name$]]!";
    expect(
      replaceTags(text, values, DoubleSquareBracketsWithDollarSigns),
    ).toBe("Hello John Doe!");
  });
  it("replaces {# Curly Braces with Pound Signs #}", () => {
    const text = "Hello {#name#}!";
    expect(replaceTags(text, values, CurlyBracesWithPoundSigns)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces ^^{ Double Carets with Braces }^^", () => {
    const text = "Hello ^^{name}^^!";
    expect(replaceTags(text, values, DoubleCaretsWithBraces)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces {! Single Braces with Exclamation Mark !}", () => {
    const text = "Hello {!name!}!";
    expect(
      replaceTags(
        text,
        values,
        SingleCurlyBracesWithExclamationMarks,
      ),
    ).toBe("Hello John Doe!");
  });
  it("replaces ?? Double Question Marks ??", () => {
    const text = "Hello ??name??!";
    expect(replaceTags(text, values, DoubleQuestionMarks)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces #{ Hash Symbols with Curly Braces }#", () => {
    const text = "Hello #{name}#!";
    expect(
      replaceTags(text, values, HashSymbolsWithCurlyBraces),
    ).toBe("Hello John Doe!");
  });
  it("replaces « Double Angle »", () => {
    const text = "Hello «name»!";
    expect(replaceTags(text, values, DoubleAngle)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces 👉 Pointing Hands 👈", () => {
    const text = "Hello 👉name👈!";
    expect(replaceTags(text, values, PointingHands)).toBe(
      "Hello John Doe!",
    );
  });
});
