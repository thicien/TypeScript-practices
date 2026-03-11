export function alphanumeric(string: string): boolean {
    if (string.length === 0) return false;

    for (let char of string) {
        if (!/[a - zA-Z0-9]/.test(char)) {
            return false;
        }
    }
    return true;
}
console.log(alphanumeric("abc123"));
console.log(alphanumeric("ABC"));
console.log(alphanumeric("12345"));
console.log(alphanumeric("abc_123"));
console.log(alphanumeric("abc 123"));