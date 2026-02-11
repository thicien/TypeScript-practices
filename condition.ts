let discount = 0;
let itemcount = 11;
if (itemcount > 0 && itemcount <= 5) {
    discount = 5;
} else if (itemcount > 5 && itemcount <= 10) {
    discount = 10;
} else {
    discount = 15;
}
console.log(`You got ${discount}% of discount!`);
