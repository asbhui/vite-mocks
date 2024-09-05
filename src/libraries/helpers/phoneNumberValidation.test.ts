import { isPhoneNumberValid } from './phoneNumberValidation';

describe('phone number validation', () => {
  it('should be valid uk phone number with valid length of 13', () => {
    expect(isPhoneNumberValid('0208699233433')).toBe(true);
  });

  it('should be invalid uk phone number if less than 10 digits', () => {
    expect(isPhoneNumberValid('012345678')).toBe(false);
  });

  it('should be invalid uk phone number if more than 13 digits', () => {
    expect(isPhoneNumberValid('01234567891234')).toBe(false);
  });

  it('should be valid when starting with 01,02,07', () => {
    expect(isPhoneNumberValid('01234567891')).toBe(true);
    expect(isPhoneNumberValid('02078784585')).toBe(true);
    expect(isPhoneNumberValid('0208784585')).toBe(true);
    expect(isPhoneNumberValid('07585956545')).toBe(true);
  });

  it('should be invalid when any number not starting with 01,02,07', () => {
    expect(isPhoneNumberValid('+441234567891')).toBe(false);
    expect(isPhoneNumberValid('00442078784585')).toBe(false);
    expect(isPhoneNumberValid('+44(0)3305050500')).toBe(false);
    expect(isPhoneNumberValid('0044(0)7585956545')).toBe(false);
    expect(isPhoneNumberValid('00585956545')).toBe(false);
    expect(isPhoneNumberValid('03597554555')).toBe(false);
    expect(isPhoneNumberValid('04585956545')).toBe(false);
    expect(isPhoneNumberValid('05585956545')).toBe(false);
    expect(isPhoneNumberValid('06585956545')).toBe(false);
    expect(isPhoneNumberValid('08885956545')).toBe(false);
    expect(isPhoneNumberValid('09585956545')).toBe(false);
  });
});
