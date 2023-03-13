export function commonCharacterCount(s1: string, s2: string): number {
  let counter = 0;

  for (let i = 0; i < s1.length; i++) {
    const regex = new RegExp(s1[i], 'g');

    const first = s1.match(regex)?.length;
    const second = s2.match(regex)?.length

    if (first && first > counter) {
      counter = first;
    }
    if (second && second > counter) {
      counter = second;
    }
  }
  return counter;
}

function commonCharacterCount2(s1: string, s2: string): number {
  const s1Chars: string[] = s1.split('');
  const s2Chars: string[] = s2.split('');
  const s1CharCount = getCharList(s1Chars);
  const s2CharCount = getCharList(s2Chars);
  let result = 0;

  for (let prop in s1CharCount) {
    if (s2CharCount.hasOwnProperty(prop)) {
      if (s2CharCount[prop] < s1CharCount[prop]) {
        result += s1CharCount[prop];
      } else {
        result += s2CharCount[prop];
      }
    }
  }

  return result;
}

function getCharList(chars: string[]): object {
  const wordCount: object = {};

  for (let key in chars) {
    if (wordCount.hasOwnProperty(key)) {
      wordCount[key]++;
    } else {
      wordCount[key] = 1;
    }
  }

  return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));