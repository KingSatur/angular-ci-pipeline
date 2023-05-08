import { divide } from './math';

describe('Tests for divide', () => {
  it('should divide 6 by 3 and return 2', () => {
    expect(divide(6, 3)).toEqual(2);
  });
  it('should divide 6 by 3 and return 2', () => {
    expect(divide(6, 0)).toEqual(null);
  });
});
