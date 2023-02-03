export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let result: number = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 0; i < inputArray.length; i++) {
    const newMax = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (result < newMax) {
      result = newMax;
    }
  }
  return result;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));