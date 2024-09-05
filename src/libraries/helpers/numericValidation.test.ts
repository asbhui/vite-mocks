import { formatNumber, isNumber, numberOrdinal, roundNumberUp } from './numericValidation';

describe('Account number validation', () => {
  it('should format account number less than 8 digits', () => {
    const accountNumber = '451568';
    expect(formatNumber(accountNumber, 8, '0')).toBe('00451568');
  });
  it('check input is number', () => {
    expect(isNumber('12345678')).toBe(true);
  });

  it('check input is invalid number', () => {
    expect(isNumber('qwerty')).toBe(false);
  });
});

describe('round up number with decimals', () => {
  it('should round up to int number', () => {
    const numberRoundedUp1 = roundNumberUp(0.1, 0);
    expect(numberRoundedUp1).toBe(1);

    const numberRoundedUp2 = roundNumberUp(0.9, 0);
    expect(numberRoundedUp2).toBe(1);

    const numberRoundedUp3 = roundNumberUp(1.0, 0);
    expect(numberRoundedUp3).toBe(1);
  });
  it('should round up at one decimal', () => {
    const numberRoundedUp1 = roundNumberUp(0.1, 1);
    expect(numberRoundedUp1).toBe(0.1);

    const numberRoundedUp2 = roundNumberUp(0.11, 1);
    expect(numberRoundedUp2).toBe(0.2);

    const numberRoundedUp3 = roundNumberUp(0.1999, 1);
    expect(numberRoundedUp3).toBe(0.2);
  });
  it('should round up at two decimals', () => {
    const numberRoundedUp1 = roundNumberUp(0.02, 2);
    expect(numberRoundedUp1).toBe(0.02);

    const numberRoundedUp2 = roundNumberUp(0.1999999, 2);
    expect(numberRoundedUp2).toBe(0.2);

    const numberRoundedUp3 = roundNumberUp(0.10009, 2);
    expect(numberRoundedUp3).toBe(0.11);
  });
});

describe('numberOrdinal', () => {
  it('firsts', () => {
    expect(numberOrdinal(1)).toBe('st');
    expect(numberOrdinal(11)).toBe('th');
    expect(numberOrdinal(21)).toBe('st');
  });
  it('seconds', () => {
    expect(numberOrdinal(2)).toBe('nd');
    expect(numberOrdinal(12)).toBe('th');
    expect(numberOrdinal(22)).toBe('nd');
  });
  it('thirds', () => {
    expect(numberOrdinal(3)).toBe('rd');
    expect(numberOrdinal(13)).toBe('th');
    expect(numberOrdinal(23)).toBe('rd');
  });
  it('fourths', () => {
    expect(numberOrdinal(4)).toBe('th');
    expect(numberOrdinal(14)).toBe('th');
    expect(numberOrdinal(24)).toBe('th');
  });
  it('random big numbers', () => {
    expect(numberOrdinal(2431)).toBe('st');
    expect(numberOrdinal(5623)).toBe('rd');
    expect(numberOrdinal(1000)).toBe('th');
  });
});
