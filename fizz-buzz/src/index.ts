export const fizzBuzz = (_length: number) => {
  return Array.from(Array(_length).keys())
    .map((i) => i + 1)
    .map((i) => {
      if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz";
      }
      if (i % 3 === 0) {
        return "Fizz";
      }
      if (i % 5 === 0) {
        return "Buzz";
      }
      return i;
    })
    .join(",");
};
