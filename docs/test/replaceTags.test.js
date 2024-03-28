describe("replaceTags", function () {
  it("should replace text", function () {
    expect(replaceTags("{{name}}", { name: "John Doe" })).toBe(
      "John Doe",
    );
  });
});
