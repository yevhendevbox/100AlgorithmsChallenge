export function arrayConversion(inputArray: number[]): number {
  let isOdd: boolean = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }
  return inputArray[0];
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
  const sumProduct: number[] = [];

  if (isOdd) {
    for (let i = 0; i < nums.length; i += 2) {
      sumProduct.push(nums[i] + nums[i + 1])
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      sumProduct.push(nums[i] * nums[i + 1])
    }
  }
  return sumProduct;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));