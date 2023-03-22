export function digitDegree(n: number): number {
  let counter = 0;
  let stringifyed = n.toString().split('');
  while (stringifyed.length > 1) {
    stringifyed = stringifyed.reduce((acc, char) => acc += +char, 0).toString().split('');
    counter++;
  }

  return counter;
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));