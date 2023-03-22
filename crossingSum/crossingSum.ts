export function crossingSum(matrix: number[][], a: number, b: number): number {
  const columnSum = matrix[a].reduce((a, b) => a + b);
  let rowSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    rowSum += i !== a ? matrix[i][b] : 0;
  }

  return columnSum + rowSum;
}

// console.log(crossingSum([[1, 1, 1, 1],
//     [2, 2, 2, 2],
//     [3, 3, 3, 3]], 1, 3));