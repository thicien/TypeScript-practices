export function alphabetPosition(text: string): string {
  return text
    .toLowerCase()
    .split('')
    .filter(char => char >= 'a' && char <= 'z')
    .map(char => char.charCodeAt(0) - 96)
    .join(' ');
}
console.log(alphabetPosition("abc"));
console.log(alphabetPosition("The sunset sets at twelve o' clock."));