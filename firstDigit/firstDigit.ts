export function firstDigit(inputString: string): string {
  const regex = /\d{1}/g;
  return inputString.match(regex)[0].toString();
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
