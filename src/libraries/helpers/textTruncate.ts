export const textTruncate = (inputText: string, len = 45): string => {
  if (inputText.length <= len) {
    return inputText;
  }
  return `${inputText.slice(0, len - 3)}...`;
};
