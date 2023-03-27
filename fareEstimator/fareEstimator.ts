export function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
  const totalTimeCost = cost_per_minute.map(el => el * ride_time);
  const totalMilesCost = cost_per_mile.map(el => el * ride_distance);
  const fareEstimation: number[] = [];

  for (let i = 0; i < totalTimeCost.length; i++) {
    fareEstimation.push(+(totalTimeCost[i] + totalMilesCost[i]).toFixed(1));
  }

  return fareEstimation;
}

function fareEstimator2(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
  return cost_per_minute.map((el, index) => +((el * ride_time) + (cost_per_mile[index] * ride_distance)).toFixed(1));
}

console.log(fareEstimator2(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
