export function sumPairs(ints: number[], s: number): [number, number] | void {
  const seen = new Set<number>();

  for (let i = 0; i < ints.length; i++) {
    const current = ints[i];
    const needed = s - current;
    if (seen.has(needed)) {
      return [needed, current];
    }
    seen.add(current);
  }
  return undefined;
}
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));