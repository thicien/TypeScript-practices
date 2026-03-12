export function alphanumeric(string: string): boolean {
    if (string.length === 0) return false;

    for (let char of string) {
        if (!/[a - zA-Z0-9]/.test(char)) {
            return false;
        }
    }
    return true;
}