export function bishopAndPawn(bishop: string, pawn: string): boolean {
  const board = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
  }
  const bishopPosition = {
    x: board[bishop[0]],
    y: parseInt(bishop[1]),
  }

  const pawnPosition = {
    x: board[pawn[0]],
    y: parseInt(pawn[1]),
  }

  if (bishopPosition.x + bishopPosition.y === pawnPosition.y + pawnPosition.x || bishopPosition.x + pawnPosition.y === pawnPosition.x + bishopPosition.y) {
    return true;
  }

  return false;
}

console.log(bishopAndPawn('a1', 'c3'));