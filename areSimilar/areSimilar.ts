export function areSimilar(a: number[], b: number[]): boolean {
  if (a.every((num: number, index: number): boolean => num === b[index])) {
    return true;
  }
  for (let i = 0; i < a.length - 1; i++) {
    const temp = b[i];
    const temp2 = b[i + 1];
    b[i] = temp2;
    b[i + 1] = temp;
    if (a.every((num: number, index: number): boolean => num === b[index])) {
      return true;
    }
  }
  return false;
}

function areSimilar2(a: number[], b: number[]): boolean {
  const c: number[] = [];
  let d: number[] = [];

  if (a.toString() === b.toString()) return true;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }

  d = d.reverse();

  if (c.length === 2 && c.toString() === d.toString()) return true;

  return false;
}

console.log(areSimilar2([1, 2, 3], [1, 2, 3]));
console.log(areSimilar2([1, 2, 3], [2, 1, 3]));
console.log(areSimilar2([1, 2, 2], [2, 1, 1]));
