function solution(brown, yellow) {
  for (let y = 3; y <= (brown + yellow) / y; y++) {
    let x = parseInt((brown + yellow) / y);

    if (x < y) continue;

    if ((x - 2) * (y - 2) === yellow) return [x, y];
  }
}
