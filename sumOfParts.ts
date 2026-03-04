export function partsSums(ls : number[]): number[] {
  const result: number[] = [];
  let total = ls.reduce((acc, curr) => acc + curr, 0);
  result.push(total);
  for (let i = 0; i < ls.length; i++) {
    total -= ls[i];
    result.push(total);
  }
  return result;
}
console.log(partsSums([1, 2, 3, 4, 5, 6]));