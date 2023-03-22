export function depositProfit(deposit: number, rate: number, threshold: number): number {
  const rounedRate = rate / 100;
  let years = 0;

  while (deposit <= threshold) {
    deposit += deposit * rounedRate;
    years++;
  }

  return years;
}
console.log(depositProfit(100, 20, 170));