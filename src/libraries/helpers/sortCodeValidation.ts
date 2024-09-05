export const isBankSortCodeValid = (sortCode: string): boolean => {
  const accountSortCodeRegex = /^(?!(?:0{6}|00-00-00))(?:\d{6}|\d{2}-\d{2}-\d{2})$/;
  return accountSortCodeRegex.test(sortCode);
};
