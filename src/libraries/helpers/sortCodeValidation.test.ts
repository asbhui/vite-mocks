import { isBankSortCodeValid } from './sortCodeValidation';

describe('Sortcode validation', () => {
  it('check bank sort code is valid', () => {
    const sortCode = '56-56-56';
    expect(isBankSortCodeValid(sortCode)).toBeTruthy();
  });

  it('check bank sort code is invalid', () => {
    const sortCode = '';
    expect(isBankSortCodeValid(sortCode)).toBeFalsy();
  });
});
