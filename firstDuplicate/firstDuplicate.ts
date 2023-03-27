export function firstDuplicate(a: number[]): number {
  const dublicates = {};

  for (let i of a) {
    if (dublicates.hasOwnProperty(i)) {
      return i;
    }
    dublicates[i] = i;
  }

  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
