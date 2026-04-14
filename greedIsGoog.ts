export function score(dice: number[]): number {
    let total = 0;
    const counts: { [key: number]: number } = {};
    for (let die of dice) {
        counts[die] = (counts[die] || 0) + 1;
    }
    for (let num = 1; num <= 6; num++) {
        const count = counts[num] || 0;
        if (count >= 3) {
      if (num === 1) {
        total += 1000;
      } else {
        total += num * 100;
      }
      counts[num] -= 3;
    }
    }
    total += (counts[1] || 0) * 100;
    total += (counts[5] || 0) * 50;
    return total;
}
console.log(score([5, 1, 3, 4, 1]));
console.log(score([2, 3, 4, 5, 9, 6]));
console.log(score([5, 8, 9, 3, 1, 2]));
console.log(score([5, 1, 4, 3, 1]));
console.log(score([5, 4, 4, 3,1]))