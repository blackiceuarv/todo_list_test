export const truncateWithDots = (input: string, maxLength: number): string => {
  if (input.length > maxLength) {
    return input.slice(0, maxLength) + "...";
  } else {
    return input;
  }
};
