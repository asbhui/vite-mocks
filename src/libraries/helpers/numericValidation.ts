export const isNumber = (input: string): boolean => {
  const isNumberRegex = /^\d*$/;
  return isNumberRegex.test(input);
};

export const formatNumber = (originalString: string, maxLength: number, fillString: string): string => {
  return String(originalString).padStart(maxLength, fillString);
};

export const roundNumberUp = (value: number, decimals: number): number => {
  return Math.ceil(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

export const numberOrdinal = (number: number): string => {
  if (number >= 4 && number < 20) {
    return 'th';
  }
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
