export function fancyRide(l: number, fares: number[]): string {
  const uberRates = {
    '0': 'UberX',
    '1': 'UberXL',
    '2': 'UberPlus',
    '3': 'UberBlack',
    '4': 'UberSUV',
  }
  const budget = 20;
  let higherCost = 0;
  const ratesCost = fares.map(rate => rate * l);
  console.log(ratesCost);

  for (let i = 0; i < ratesCost.length; i++) {
    if (budget >= ratesCost[i]) {
      higherCost = i;
    }
  }
  return uberRates[higherCost];
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));