export function differentSymbolsNaive(s: string): number {
  return [... new Set(s)].length;
}

function differentSymbolsNaive2(s: string): number {
  const unique: string[] = [];
  const chars: string[] = s.split('');

  chars.forEach(char => {
    if (!unique.includes(char)) {
      unique.push(char);
    }
  });

  return unique.length;
}

console.log(differentSymbolsNaive('cabca'));
