export function candies(n: number, m: number): number {
  let result: number = 0;
  m % n === 0 ? result = m : result = m - (m % n);
  return result;
}

console.log(candies(3, 10));