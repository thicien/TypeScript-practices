export function nextBigger(n: number): number {
  const digits = n.toString().split('').map(Number);
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }
  if (i < 0) return -1;
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }
  [digits[i], digits[j]] = [digits[j], digits[i]];
  const left = digits.slice(0, i + 1);
  const right = digits.slice(i + 1).sort((a, b) => a - b);
  return Number(left.concat(right).join(''));
}
console.log(nextBigger(2017));