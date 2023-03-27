export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  let daysNeeded = 0;
  let currentHeight = 0;

  while (currentHeight < desiredHeight) {
    daysNeeded++;
    currentHeight += upSpeed;

    if (currentHeight < desiredHeight) {
      currentHeight -= downSpeed;
    }
  }

  return daysNeeded;
}

console.log(growingPlant(100, 10, 910))