function getRandomNumberElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var colors = ['orange', 'green', 'black', 'yellow', 'red'];
var numbers = [1, 3, 4, 2, 6, 7, 8, 9];
console.log(getRandomNumberElement(colors));
console.log(getRandomNumberElement(numbers));
