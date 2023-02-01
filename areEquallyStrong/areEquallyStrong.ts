export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  return yourLeft === friendsLeft && yourRight === friendsRight
    ? true
    : yourLeft === friendsRight && yourRight === friendsLeft
      ? true
      : false;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
