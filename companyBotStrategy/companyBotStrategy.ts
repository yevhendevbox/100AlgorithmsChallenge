export function companyBotStrategy(trainingData: number[][]): number {
  const temp = trainingData.filter(el => el[1] === 1);

  if (!temp.length) return 0.0;

  const sum = temp.reduce((acc, el) => acc = acc + el[0], 0);
  return sum / temp.length;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
