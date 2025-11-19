export function addAll(nums: number[]): number {
    let total = 0;
    while (nums.length > 1) {
        nums.sort((a, b) => a - b);
        const a = nums.shift()!;
        const b = nums.shift()!;
        const cost = a + b;

        total += cost;
        nums.push(cost);
    }
    return total;

}
console.log(addAll([1, 2, 3]));
console.log(addAll([1, 2, 3, 4]));
