export class Kata {
  static findLongest(array: number[]): number {
    let longest = array[0];

    for (const num of array) {
      if (Math.abs(num).toString().length > Math.abs(longest).toString().length) {
        longest = num;
      }
    }
    return longest;
  }
}
console.log(Kata.findLongest([1, 10, 100, 50])); 
console.log(Kata.findLongest([9000, 8, 800])); 