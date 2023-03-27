export function firstNotRepeatingCharacter(s: string): string {
  const chars: string[] = s.split('');
  const charsCounters = {};
  let answer = '_';
  let answerIndex = Number.MAX_SAFE_INTEGER;

  chars.forEach((element, index) => {
    if (!(element in charsCounters)) {
      charsCounters[element] = {
        counter: 1,
        index,
      }
    } else {
      charsCounters[element].counter++;
      charsCounters[element].index = index;
    }
  });

  for (const key in charsCounters) {
    if (charsCounters[key].counter === 1 && charsCounters[key].index < answerIndex) {
      answer = key;
      answerIndex = charsCounters[key].index;
    }
  }

  return answer;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
