import calculateBaseStats from './base';

describe('Helpers details base', () => {
  it('should be defined', () => {
    expect(calculateBaseStats).toBeDefined();
  });

  it('should calculate percentage base stas', () => {
    // console.log(calculateBaseStats(255))

    expect(calculateBaseStats(55)).toBe(22);
    expect(calculateBaseStats(142)).toBe(56);
    expect(calculateBaseStats(255)).toBe(100);
  });
});
