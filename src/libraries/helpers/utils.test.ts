import { memoNoArgs, separateKeys } from './utils';

describe('Utilities', () => {
  describe('memoNoArgs', () => {
    it("doesn't call the function on the 2nd call", () => {
      const mockFn = vi.fn(() => 123);
      const wrappedMockFn = memoNoArgs(mockFn);
      expect(wrappedMockFn()).toBe(123);
      expect(wrappedMockFn()).toBe(123);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('separateKeys', () => {
    interface OneTwoThree {
      one: number;
      three: number;
      two: number;
    }

    interface FourFive {
      five: number;
      four: number;
    }
    it('splits keys with correct types', () => {
      const obj = {
        five: 5,
        four: 4,
        one: 1,
        three: 3,
        two: 2,
      };
      const [half1, half2]: [OneTwoThree, FourFive] = separateKeys(obj, ['one', 'two', 'three']);
      expect(half1).toEqual({
        one: 1,
        three: 3,
        two: 2,
      });
      expect(half2).toEqual({
        five: 5,
        four: 4,
      });
    });
  });
});
