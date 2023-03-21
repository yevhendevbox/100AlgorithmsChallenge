export function composeRanges(nums: number[]): string[] {
  let result: Array<string> = [];
  const chunks: Array<Array<number>> = [];
  let temp: Array<number> = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      temp.push(nums[i]);
    } else {
      temp.push(nums[i]);
      chunks.push(temp);
      temp = [];
    }
  }
  result = chunks.map(el => {
    if (el.length === 1) return el.toString();
    return `${el[0]}->${el[el.length - 1]}`;
  });
  return result;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));