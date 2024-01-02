function solution(maps) {
  const xLen = maps[0].length,
    yLen = maps.length;
  const goalX = xLen - 1,
    goalY = yLen - 1;
  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [y, x, cnt] = queue.shift();

    if (x === goalX && y === goalY) return cnt;
    if (x < 0 || x >= xLen || y < 0 || y >= yLen || maps[y][x] === 0) continue;

    maps[y][x] = 0;
    queue.push([y + 1, x, cnt + 1]);
    queue.push([y - 1, x, cnt + 1]);
    queue.push([y, x + 1, cnt + 1]);
    queue.push([y, x - 1, cnt + 1]);
  }

  return -1;
}
