function splitOddAndEven(n) {
  const digits = String(n);
  const result = [];
  let current = digits[0];
  for (let i = 1; i < digits.length; i++) {
    let previous = digits[i - 1] % 2;
    let curry = digits[i] % 2;
    if (previous === curry) {
      current += digits[i];
    } else {
      result.push(Number(current));
      current = digits[i];
    }
  }
  result.push(Number(current));
  return result;
}
