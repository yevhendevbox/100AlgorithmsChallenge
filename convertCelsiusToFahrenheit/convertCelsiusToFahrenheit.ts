export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 1.8) + 32;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));