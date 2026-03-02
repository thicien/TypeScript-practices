function getRandomNumberElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let colors = ['orange', 'green', 'black', 'yellow', 'red'];
let numbers = [1, 3, 4, 2, 6, 7, 8, 9];
console.log(getRandomNumberElement(colors));
console.log(getRandomNumberElement(numbers));