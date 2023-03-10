export function boxBlur(image: number[][]): number[][] {
  const pixelsCount = image.reduce((acc, el) => acc += el.length, 0);
  const unifyArr = image.reduce((acc, el) => acc.concat(el), []);
  const pixelsSum = unifyArr.reduce((acc, el) => acc += el);
  const result: number[][] = [[Math.floor(pixelsSum / pixelsCount)]];
  return result;
}

console.log(boxBlur([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));