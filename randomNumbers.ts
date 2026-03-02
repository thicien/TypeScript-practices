function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numbers = [1, 2, 3, 5, 6, 7, 8, 9];
console.log(getRandomNumberElement(numbers));