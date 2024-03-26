import { MatcherContext } from "expect";

expect.extend({
  toHaveLengthLessThanOrEqualTo(
    this: MatcherContext,
    received: any,
    maxLength: number,
  ) {
    const pass = received.length <= maxLength;
    const message = pass
      ? () =>
          `expected ${received} length to be more than ${maxLength}`
      : () =>
          `expected "${received}" length not to be more than ${maxLength}`;

    return {
      pass,
      message,
    };
  },
});
