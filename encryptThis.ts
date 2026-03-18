export const encryptThis = (str: string): string => {
  return str
    .split(" ")
    .map(word => {
      if (word.length === 0) return "";
      if (word.length === 1) return word.charCodeAt(0).toString(); 

      if (word.length === 2) {
        return word.charCodeAt(0).toString() + word[1];
      }
      const firstLetter = word.charCodeAt(0); 
      const middle = word.slice(2, word.length - 1);
      const lastLetter = word[word.length - 1];
      const secondLetter = word[1];
      return `${firstLetter}${lastLetter}${middle}${secondLetter}`;
    })
    .join(" ");
};
console.log(encryptThis("Hello"));
console.log(encryptThis("good"));
console.log(encryptThis("hello world"));