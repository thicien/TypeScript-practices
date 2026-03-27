export function adjacentElementsProduct(arr: number[]): number {
  let maxProduct = arr[0] * arr[1];
  for (let i = 1; i < arr.length -1; i++) {
    const product = arr[i] * arr[i + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}
console.log(adjacentElementsProduct([2, 3]));
console.log(adjacentElementsProduct([5, 10]));
console.log(adjacentElementsProduct([ -2, 7]));