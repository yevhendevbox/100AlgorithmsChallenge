export function findClosestPair(numbers: number[], sum: number): number {
  let distance = -1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length - 1; j++) {
      const distanceSum = numbers[i] + numbers[j];
      const absDistance = Math.abs(i - j);
      if (sum === distanceSum) {
        if (distance === -1 || absDistance < distanceSum) {
          distance = absDistance;
        }
      }
    }
  }

  return distance;
}

// console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
// console.log(findClosestPair([2, 3, 7], 8));