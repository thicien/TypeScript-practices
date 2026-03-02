export function cleanString(str: string): string {
    const word: string[] = [];
    for (let char of str) {
        if (char === '#') {
            word.pop();
        } else {
            word.push(char);
        }
    }
    return word.join('');
}
console.log(cleanString("ab##d##"));