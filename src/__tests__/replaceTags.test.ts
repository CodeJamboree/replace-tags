import replaceTags from "../replaceTags";
import * as cache from "../cache";

describe("replace tags", () => {
  beforeEach(() => {
    cache.clear();
  });
  describe("cache", () => {
    it("Defaults to avoid caching previous values", () => {
      const text = "Hello {{name}}!";
      const values1 = { name: "John Doe" };
      const values2 = { name: "Jane Smith" };
      expect(replaceTags(text, values1)).toBe("Hello John Doe!");
      expect(replaceTags(text, values2)).toBe("Hello Jane Smith!");
    });
    it("Can use values from previous call.", () => {
      const text = "Hello {{name}}!";
      const values1 = { name: "John Doe" };
      const values2 = { name: "Jane Smith" };
      const options = { cache: true };
      expect(replaceTags(text, values1, options)).toBe(
        "Hello John Doe!",
      );
      expect(replaceTags(text, values2, options)).toBe(
        "Hello John Doe!",
      );
    });
    it("Cache can be forced off", () => {
      const text = "Hello {{name}}!";
      const values1 = { name: "John Doe" };
      const values2 = { name: "Jane Smith" };
      const options = { cache: false };
      expect(replaceTags(text, values1, options)).toBe(
        "Hello John Doe!",
      );
      expect(replaceTags(text, values2, options)).toBe(
        "Hello Jane Smith!",
      );
    });
  });
  it("accepts empty string", () => {
    expect(replaceTags("", { key: "value" })).toBe("");
  });
  it("replaces multiple occurances of the same tag", () => {
    const text = "Tag 1: {{name}} Tag 2: {{name}}";
    const values = { name: "Works" };
    expect(replaceTags(text, values)).toBe(
      "Tag 1: Works Tag 2: Works",
    );
  });
  it("trims white-space inside tag", () => {
    const text = "Hello {{ name }}!";
    const values = { name: "World" };
    expect(replaceTags(text, values)).toBe("Hello World!");
  });
  it("replaces top-level properties", () => {
    const text = "Hello {{name}}!";
    const values = { name: "World" };
    expect(replaceTags(text, values)).toBe("Hello World!");
  });
  it("recognizes values as JSON", () => {
    const text = "Hello {{name}}!";
    const values = JSON.stringify({ name: "World" });
    expect(replaceTags(text, values)).toBe("Hello World!");
  });
  it("throws errors parsing values as JSON.", () => {
    const text = "Hello {{name}}!";
    const values = "This is not JSON";
    expect(() => replaceTags(text, values)).toThrow();
  });
  it("replaces nested properties", () => {
    const text = "Hello {{user.name}}!";
    const values = { user: { name: "John Doe" } };
    expect(replaceTags(text, values)).toBe("Hello John Doe!");
  });
  it("works with array indexes", () => {
    const text = "Hello {{users[0].name}}!";
    const values = { users: [{ name: "John Doe" }] };
    expect(replaceTags(text, values)).toBe("Hello John Doe!");
  });
  it("works with array indexes as dot-noation", () => {
    const text = "Hello {{users.0.name}}!";
    const values = { users: [{ name: "John Doe" }] };
    expect(replaceTags(text, values)).toBe("Hello John Doe!");
  });
  describe("value functions", () => {
    it("calls value as function", () => {
      const text = "Hello {{name}}!";
      const values = { name: () => "John Doe" };
      expect(replaceTags(text, values)).toBe("Hello John Doe!");
    });
    it("can call multiple funtions within full path", () => {
      const text = "Hello {{user.name}}!";
      const values = { user: () => ({ name: () => "John Doe" }) };
      expect(replaceTags(text, values)).toBe("Hello John Doe!");
    });
    it("functions have context", () => {
      const text = "Hello {{getFullName}}!";
      const values = {
        first: "John",
        last: "Doe",
        getFullName: function () {
          return `${this.first} ${this.last}`;
        },
      };
      expect(replaceTags(text, values)).toBe("Hello John Doe!");
    });
    it("passes current key to the function as argument 1", () => {
      const text = "Hello {{user.name}}!";
      const nameCallback = jest.fn().mockReturnValue("John Doe");
      const userCallback = jest
        .fn()
        .mockReturnValue({ name: nameCallback });
      const values = { user: userCallback };
      replaceTags(text, values);
      expect(userCallback).toHaveBeenCalledWith(
        "user",
        expect.anything(),
        expect.anything(),
      );
      expect(nameCallback).toHaveBeenCalledWith(
        "name",
        expect.anything(),
        expect.anything(),
      );
    });
    describe("arg2: current path", () => {
      it("works with objects", () => {
        const text = "Hello {{user.name}}!";
        const nameCallback = jest.fn().mockReturnValue("John Doe");
        const userCallback = jest
          .fn()
          .mockReturnValue({ name: nameCallback });
        const values = { user: userCallback };
        replaceTags(text, values);
        expect(userCallback).toHaveBeenCalledWith(
          expect.anything(),
          "user",
          expect.anything(),
        );
        expect(nameCallback).toHaveBeenCalledWith(
          expect.anything(),
          "user.name",
          expect.anything(),
        );
      });
      it("works with arrays", () => {
        const text = "Hello {{user[0].name}}!";
        const nameCallback = jest.fn().mockReturnValue("John Doe");
        const user1Callback = jest
          .fn()
          .mockReturnValue({ name: nameCallback });
        const userCallback = jest
          .fn()
          .mockReturnValue([user1Callback]);
        const values = { user: userCallback };
        replaceTags(text, values);
        expect(userCallback).toHaveBeenCalledWith(
          expect.anything(),
          "user",
          expect.anything(),
        );
        expect(user1Callback).toHaveBeenCalledWith(
          expect.anything(),
          "user[0]",
          expect.anything(),
        );
        expect(nameCallback).toHaveBeenCalledWith(
          expect.anything(),
          "user[0].name",
          expect.anything(),
        );
      });
    });
    it("passes the full path to the function as argument 3", () => {
      const text = "Hello {{user.name}}!";
      const nameCallback = jest.fn().mockReturnValue("John Doe");
      const userCallback = jest
        .fn()
        .mockReturnValue({ name: nameCallback });
      const values = { user: userCallback };
      replaceTags(text, values);
      expect(userCallback).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        "user.name",
      );
      expect(nameCallback).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        "user.name",
      );
    });
  });
  describe("missing values", () => {
    it("works with invalid key paths", () => {
      const text = "Hello {{name}}!";
      const values = {};
      expect(replaceTags(text, values)).toBe("Hello {{name}}!");
    });
    it("works with invalid nested key paths without top-level key", () => {
      const text = "Hello {{user.name}}!";
      const values = {};
      expect(replaceTags(text, values)).toBe("Hello {{user.name}}!");
    });
    it("works with invalid nested key paths without sub-level key", () => {
      const text = "Hello {{user.name}}!";
      const values = { user: {} };
      expect(replaceTags(text, values)).toBe("Hello {{user.name}}!");
    });
    it("works with out-of-bounds array indexes", () => {
      const text = "Hello {{users.2.name}}!";
      const values = { users: [{ name: "John Doe" }] };
      expect(replaceTags(text, values)).toBe(
        "Hello {{users.2.name}}!",
      );
    });
  });
  describe("invalid text", () => {
    it("handles undefined", () => {
      const badText = undefined;
      expect(
        replaceTags(badText as unknown as string, { key: "value" }),
      ).toBe(badText);
    });
    it("handles object", () => {
      const badText = { key: "value" };
      expect(
        replaceTags(badText as unknown as string, { key: "value" }),
      ).toBe(badText);
    });
    it("handles null", () => {
      const badText = null;
      expect(
        replaceTags(badText as unknown as string, { key: "value" }),
      ).toBe(badText);
    });
  });
});
