function getRandomNumberElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let colors = ['orange', 'green', 'black', 'yellow', 'red'];
let numbers = [1, 3, 4, 2, 6, 7, 8, 9];
let randomColors = getRandomNumberElement(colors);
let randomNum = getRandomNumberElement(numbers);

console.log(randomNum);
console.log(randomColors);