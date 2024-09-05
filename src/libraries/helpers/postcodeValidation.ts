export const isPostcodeValid = (postcode: string): boolean => {
  const postCodeRegEx = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
  return postCodeRegEx.test(postcode.trim());
};
