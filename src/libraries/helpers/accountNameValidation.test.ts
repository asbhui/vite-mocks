import { validatedAccountName } from './accountNameValidation';

describe('account holder name', () => {
  it('return true with valid name', () => {
    expect(validatedAccountName('James Bond')).toMatchObject({ isValid: true });
  });
  it('return true with middle name', () => {
    expect(validatedAccountName('James T Kirk')).toMatchObject({ isValid: true });
  });
  it('return true with minimum length', () => {
    expect(validatedAccountName('JB')).toMatchObject({ isValid: true });
  });
  it('return true with double barrelled surname', () => {
    expect(validatedAccountName('Simon Noah-James')).toMatchObject({ isValid: true });
  });
  it('return false if no name provided', () => {
    expect(validatedAccountName('')).toMatchObject({ isValid: false });
  });
  it('return false if minimum length not met', () => {
    expect(validatedAccountName('J')).toMatchObject({ isValid: false });
  });
  it('return false if brackets are used in the name', () => {
    expect(validatedAccountName('James (Bond)')).toMatchObject({ isValid: false });
  });
  it('return false if numbers is used in the name', () => {
    expect(validatedAccountName('James Bond1')).toMatchObject({ isValid: false });
  });
  it('return false if senior abbreviation is used in the name', () => {
    expect(validatedAccountName('Sr. James Bond')).toMatchObject({ isValid: false });
  });
  it('return false if junior abbreviation is used in the name', () => {
    expect(validatedAccountName('James Bond Jr.')).toMatchObject({ isValid: false });
  });
  it('return false if shortening of middle name is used in the name', () => {
    expect(validatedAccountName('James P. Frederick')).toMatchObject({ isValid: false });
  });
  it('return false if shortening and hyphen are used in the name', () => {
    expect(validatedAccountName('Atty. Dera L. Johnsen-Tracy')).toMatchObject({ isValid: false });
  });
});
