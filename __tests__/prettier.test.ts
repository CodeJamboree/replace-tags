import prettierConfig from "../prettier.config";

describe('Prettier Configuration', () => {
  it('lets code in readme.md display without scrolling on npmjs', () => {
    expect(prettierConfig.printWidth).toBeLessThanOrEqual(70);
  })
})