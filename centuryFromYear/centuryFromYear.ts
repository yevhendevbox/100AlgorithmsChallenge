export function centuryFromYear(year: number): number {
  return year % 100 === 0 ? year / 100 : Math.floor((year / 100) + 1);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));