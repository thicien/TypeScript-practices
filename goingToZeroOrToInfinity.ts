export function going(n: number): number {
    let u = 1;
    for (let i = 2; i <= n; i++) {
        u = u / i + 1;
    }
    return u;
}
console.log(going(10));