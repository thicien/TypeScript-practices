export function findSmallestInt(args: number[]): number {
    let smallest = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < smallest) {
            smallest = args[i];
        }
    }
    return smallest;
}
const small = [34, -345, -1, 100];
console.log(findSmallestInt(small));