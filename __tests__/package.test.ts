import packageJson from '../package.json';

describe('Package', () => {
  it('has no more than 20 keywords', () => {
    expect(packageJson.keywords.length).toBeLessThanOrEqual(20);
  });
});