export function fermactor(n: number): number[] {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const result = i ** 2 - j ** 2;

      if (result === n) {
        return [i, j];
      }
    }
  }
}

console.log(fermactor(15));