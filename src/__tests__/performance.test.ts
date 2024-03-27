import replaceTags from "../replaceTags";

describe("replaceTags performance tests", () => {
  const iterations = 100000;
  let start: [number, number] = [0, 0];
  const executionMilliseconds = () => {
    const end = process.hrtime(start);
    return end[0] * 1000 + end[1] / 1000000; // milliseconds
  };
  const values = {
    users: [
      [{ name: { first: "Jane", last: "Smith" } }],
      [
        {
          name: () => ({
            first: "John",
            last: "Doe",
          }),
        },
      ],
    ],
  };
  beforeEach(() => {
    start = process.hrtime();
  });
  it("should complete within a reasonable time without caching", () => {
    const options = { cache: false };
    const input =
      "Hello, {{ users[0][1].name.first }} {{ users[0][1].name.last }}!";
    for (let i = 0; i < iterations; i++) {
      replaceTags(input, values, options);
    }
    expect(executionMilliseconds()).toBeLessThan(1000);
  });
  it("should complete within a reasonable time with caching", () => {
    const options = { cache: true };
    const input =
      "Hello, {{ users[0][1].name.first }} {{ users[0][1].name.last }}!";
    for (let i = 0; i < iterations; i++) {
      replaceTags(input, values, options);
    }
    expect(executionMilliseconds()).toBeLessThan(500);
  });
});
