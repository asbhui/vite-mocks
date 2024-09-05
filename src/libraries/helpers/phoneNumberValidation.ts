export const isPhoneNumberValid = (phoneNumber: string): boolean => {
  const phoneNumberRegex = /^(0[12]\d{8,11}|07\d{9})$/g;
  return phoneNumberRegex.test(phoneNumber);
};
