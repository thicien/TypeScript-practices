export function numberToEnglish(x: number): string {
  if (!Number.isInteger(x) || x < 0 || x > 99999) return "";

  const ones = [
    "zero","one","two","three","four","five","six","seven","eight","nine"
  ];

  const teens = [
    "ten","eleven","twelve","thirteen","fourteen",
    "fifteen","sixteen","seventeen","eighteen","nineteen"
  ];

  const tens = [
    "","","twenty","thirty","forty","fifty",
    "sixty","seventy","eighty","ninety"
  ];

  function convertBelow100(n: number): string {
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    const t = Math.floor(n / 10);
    const r = n % 10;
    return r === 0 ? tens[t] : `${tens[t]} ${ones[r]}`;
  }

  function convertBelow1000(n: number): string {
    if (n < 100) return convertBelow100(n);
    const h = Math.floor(n / 100);
    const r = n % 100;
    return r === 0
      ? `${ones[h]} hundred`
      : `${ones[h]} hundred ${convertBelow100(r)}`;
  }
  if (x < 1000) return convertBelow1000(x);
  const thousands = Math.floor(x / 1000);
  const remainder = x % 1000;
  return remainder === 0
    ? `${convertBelow1000(thousands)} thousand`
    : `${convertBelow1000(thousands)} thousand ${convertBelow1000(remainder)}`;
}
console.log(numberToEnglish(0));
console.log(numberToEnglish(27));
console.log(numberToEnglish(100));
console.log(numberToEnglish(7012));
console.log(numberToEnglish(99205));