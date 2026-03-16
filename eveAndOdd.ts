function evenOrOdd(n: number) {
  return n % 2 === 0 ? "Even" : "Odd";
}

const evenOrOddProxy: any = new Proxy(evenOrOdd, {
  get(target, prop) {
    const n = Number(prop);
    if (!isNaN(n)) {
      return target(n);
    }
    return (target as any)[prop];
  }
});

// Examples
console.log(evenOrOddProxy(2)); // Even
console.log(evenOrOddProxy[2]); // Even
console.log(evenOrOddProxy(7)); // Odd
console.log(evenOrOddProxy[7]); // Odd