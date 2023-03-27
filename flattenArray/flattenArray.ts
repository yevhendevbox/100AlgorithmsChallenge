export function flattenArray(arr: any[]): any[] {
  let result: any[] = [];

  flatten(arr);

  function flatten(arr: any[]) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        result = [...result, element];
      }
    })
  }

  return result;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
