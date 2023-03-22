export function electionsWinners(votes: number[], k: number): number {
  let result = 0;
  const mostVotes = Math.max(...votes);
  const sorted = votes.sort((a, b) => b - a);

  (sorted[0] !== sorted[1] && k === 0) ?? 1;

  votes.forEach(vote => {
    if (mostVotes - vote < k) {
      result++;
    }
  });

  return result;
}

console.log(electionsWinners([2, 3, 5, 2], 3));