import { isPostcodeValid } from './postcodeValidation';

describe('postcode validation', () => {
  it('should validate postcode', () => {
    const validPostcode = 'RH20SG';
    expect(isPostcodeValid(validPostcode)).toBe(true);
  });

  it('postcode ending with number is invalid', () => {
    const invalidPostcode = 'RH2SG0';
    expect(isPostcodeValid(invalidPostcode)).toBe(false);
  });

  it('partial postcode is invalid', () => {
    const invalidPostcode = 'RH20';
    expect(isPostcodeValid(invalidPostcode)).toBe(false);
  });

  it('postcode spaces after each letter is invalid', () => {
    const invalidPostcode = 'R H 2 0 S G';
    expect(isPostcodeValid(invalidPostcode)).toBe(false);
  });

  it('extra spaces between outward and inward codes', () => {
    const valid = 'RH2     0SG';
    expect(isPostcodeValid(valid)).toBe(true);
  });
  it('trim extra spaces from leading and trailing spaces', () => {
    const valid = '     RH2 0SG   ';
    expect(isPostcodeValid(valid)).toBe(true);
  });
});
