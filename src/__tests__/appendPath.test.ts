import appendPath from "../appendPath";

describe("appendPath", () => {
  it('combines paths with dot', () => {
    expect(appendPath('first', 'second')).toBe('first.second');
  });
  it('returns segment when prefix is missing', () => {
    expect(appendPath(undefined, 'second')).toBe('second');
  });
})