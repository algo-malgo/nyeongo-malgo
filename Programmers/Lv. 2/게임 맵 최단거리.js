function solution(maps) {
  const yLen = maps.length; //세로
  const xLen = maps[0].length; //가로
  const goalY = yLen - 1;
  const goalX = xLen - 1;
  const dy = [0, 0, 1, -1]; //남북
  const dx = [-1, 1, 0, 0]; //동서

  const queue = [];
  queue.push([0, 0, 1]); // 현재 위치와 지나는 칸 개수의 최솟값

  while (queue.length) {
    const [curY, curX, move] = queue.shift();

    if (curY === goalY && curX === goalX) return move;

    for (let i = 0; i < 4; i++) {
      const ny = curY + dy[i];
      const nx = curX + dx[i];

      if (ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1) {
        queue.push([ny, nx, move + 1]);
        maps[ny][nx] = 0;
      }
    }
  }

  return -1;
}
