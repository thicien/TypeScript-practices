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
console.log(evenOrOddProxy(2));
console.log(evenOrOddProxy[2]); 
console.log(evenOrOddProxy(7)); 
console.log(evenOrOddProxy[7]); 