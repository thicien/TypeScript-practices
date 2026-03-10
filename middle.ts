export function getMiddle(s: string) {
    const largest = s.length;
    const middle = Math.floor(largest / 2);
    if (largest % 2 === 0) {
        return s.slice(middle - 1, middle + 1);
    } else {
        return s.slice(middle, middle + 1);
    }
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("medium"));
console.log(getMiddle("psychological"));