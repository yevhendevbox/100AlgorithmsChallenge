export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      result.push(substitutionElem);
    } else {
      result.push(inputArray[i]);
    }
  }
  return result;
}

function arrayReplace2(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  return inputArray.map(el => el === elemToReplace ? substitutionElem : el);
}

function arrayReplace3(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  inputArray.forEach((el, i) => {
    if (el === elemToReplace) {
      el[i] = substitutionElem;
    }
  })
  return inputArray;
}


console.log(arrayReplace2([1, 2, 1], 1, 3));