export const validatedAccountName = (value: string): { isValid: boolean } => {
  const accountNameRegex = /^(?=.*[A-Za-z]{2})[A-Za-z\s-]+$/;
  const isValid = accountNameRegex.test(value);
  return {
    isValid,
  };
};
