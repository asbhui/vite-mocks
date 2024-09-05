import { renderHook } from '@testing-library/react';
import { useHelpers } from './useHelpers';

describe('Helpers hooks', () => {
  it('should check input value is number or not', () => {
    const {
      result: {
        current: { isNumber },
      },
    } = renderHook(() => useHelpers());

    expect(isNumber('12345')).toBe(true);
    expect(isNumber('12345.12345')).toBe(false);
    expect(isNumber('test')).toBe(false);
  });

  it('should format number', () => {
    const {
      result: {
        current: { formatNumber },
      },
    } = renderHook(() => useHelpers());

    expect(formatNumber('12345', 6, '0')).toBe('012345');
    expect(formatNumber('15487954', 6, '0')).toBe('15487954');
    expect(formatNumber('54', 4, '0')).toBe('0054');
  });

  it('should round up number', () => {
    const {
      result: {
        current: { roundNumberUp },
      },
    } = renderHook(() => useHelpers());

    expect(roundNumberUp(3.1484579546545612, 5)).toBe(3.14846);
    expect(roundNumberUp(154.87954, 1)).toBe(154.9);
    expect(roundNumberUp(54, 2)).toBe(54);
  });

  it('should display ordinal', () => {
    const {
      result: {
        current: { numberOrdinal },
      },
    } = renderHook(() => useHelpers());

    expect(numberOrdinal(3)).toBe('rd');
    expect(numberOrdinal(154)).toBe('th');
    expect(numberOrdinal(22)).toBe('nd');
    expect(numberOrdinal(21)).toBe('st');
    expect(numberOrdinal(0)).toBe('th');
    expect(numberOrdinal(15)).toBe('th');
  });
});
