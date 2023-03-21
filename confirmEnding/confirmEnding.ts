export function confirmEnding(str: string, target: string) {
  const start = str.length - target.length;
  return str.substring(start, str.length) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));