export function decomp(n: number): string {
  function getPrimes(limit: number): number[] {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i * i <= limit; i++) {
      if (sieve[i]) {
        for (let j = i * i; j <= limit; j += i) {
          sieve[j] = false;
        }
      }
    }
    return sieve
      .map((isPrime, i) => (isPrime ? i : 0))
      .filter(Boolean);
  }

  function countPower(n: number, p: number): number {
    let count = 0;
    while (n > 0) {
      n = Math.floor(n / p);
      count += n;
    }
    return count;
  }
  const primes = getPrimes(n);
  const result = primes.map((p) => {
    const exp = countPower(n, p);
    return exp === 1 ? `${p}` : `${p}^${exp}`;
  });
  return result.join(" * ");
}

console.log(decomp(12));