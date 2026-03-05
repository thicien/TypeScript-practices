export function duplicateEncode(word: string): string {
  const lower = word.toLowerCase();
  let result = "";

  for (let char of lower) {
    if (lower.indexOf(char) === lower.lastIndexOf(char)) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}
console.log(duplicateEncode("din")); 
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));