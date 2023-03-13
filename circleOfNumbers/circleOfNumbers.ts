export function circleOfNumbers(n: number, firstNumber: number): number {
  const numArray: number[] = [...Array(n).keys()];
  const middle = n / 2

  return firstNumber < middle ? numArray[firstNumber + middle] : numArray[firstNumber - middle];
}

console.log(circleOfNumbers(10, 2));