import replaceTags from "../../replaceTags";
import AngleBrackets from "../AngleBrackets";
import AngleBracketsWithPercentSigns from "../AngleBracketsWithPercentSigns";
import Backticks from "../Backticks";
import CurlyBracesWithDollarSigns from "../CurlyBracesWithDollarSigns";
import CurlyBracesWithHashSymbols from "../CurlyBracesWithHashSymbols";
import DollarSignsWithSquareBrackets from "../DollarSignsWithSquareBrackets";
import DollarSignWithCurlyBraces from "../DollarSignWithCurlyBraces";
import DoubleAngle from "../DoubleAngle";
import DoubleAtSigns from "../DoubleAtSigns";
import DoubleCaretsWithBraces from "../DoubleCaretsWithBraces";
import DoubleColonsWithBraces from "../DoubleColonsWithBraces";
import DoubleCurlyBracesWithPercentSign from "../DoubleCurlyBracesWithPercentSigns";
import DoubleQuestionMarks from "../DoubleQuestionMarks";
import DoubleSquareBrackets from "../DoubleSquareBrackets";
import DoubleSquareBracketsWithDollarSigns from "../DoubleSquareBracketsWithDollarSigns";
import DoubleUnderscores from "../DoubleUnderscores";
import ExclamationMarks from "../ExclamationMarks";
import HashSymbolsWithCurlyBraces from "../HashSymbolsWithCurlyBraces";
import HTMLComments from "../HTMLComments";
import Parentheses from "../Parentheses";
import PercentSigns from "../PercentSigns";
import VerticalBars from "../VerticalBars";
import Pointy from "../Pointy";
import CurlyBracesWithExclamationMarks from "../CurlyBracesWithExclamationMarks";
import SquareBrackets from "../SquareBrackets";
import SquareBracketsWithColons from "../SquareBracketsWithColons";
import SquareBracketsWithHyphens from "../SquareBracketsWithHyphens";
import TripleCurlyBraces from "../TripleCurlyBraces";

xdescribe("styles", () => {
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
  it("replaces $[dollar signs with square brackets]$", () => {
    const text = "Hello $[name]$!";
    expect(
      replaceTags(text, values, DollarSignsWithSquareBrackets),
    ).toBe("Hello John Doe!");
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
  it("replaces |vertical bars|", () => {
    const text = "Hello |name|!";
    expect(replaceTags(text, values, VerticalBars)).toBe(
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
  it("replaces [- Square Brackets with Hyphens -]", () => {
    const text = "Hello [-name-]!";
    expect(replaceTags(text, values, SquareBracketsWithHyphens)).toBe(
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
  it("replaces {# Curly Braces with Hash Symbols #}", () => {
    const text = "Hello {#name#}!";
    expect(
      replaceTags(text, values, CurlyBracesWithHashSymbols),
    ).toBe("Hello John Doe!");
  });
  it("replaces ^^{ Double Carets with Braces }^^", () => {
    const text = "Hello ^^{name}^^!";
    expect(replaceTags(text, values, DoubleCaretsWithBraces)).toBe(
      "Hello John Doe!",
    );
  });
  it("replaces {! Curly Braces with Exclamation Mark !}", () => {
    const text = "Hello {!name!}!";
    expect(
      replaceTags(text, values, CurlyBracesWithExclamationMarks),
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
  it("replaces 👉 Hand Emojis 👈", () => {
    const text = "Hello 👉name👈!";
    expect(replaceTags(text, values, Pointy)).toBe("Hello John Doe!");
  });
});
