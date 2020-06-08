import parseLabelName from './name';

describe('Helpers details name', () => {
  it('should be defined', () => {
    expect(parseLabelName).toBeDefined();
  });

  it('should replace hifen bettwen words', () => {
    expect(parseLabelName('test')).toBe('test');
    expect(parseLabelName('test-coverage')).toBe('test coverage');
    expect(parseLabelName('test/coverage')).toBe('test/coverage');
    expect(parseLabelName('test#coverage')).toBe('test#coverage');
    expect(parseLabelName('test coverage')).toBe('test coverage');
  });
});
