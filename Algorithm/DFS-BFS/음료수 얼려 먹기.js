function iceCream(n, m, arr) {
  let result = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= m) return false;

    if (arr[x][y] === 0) {
      arr[x][y] = 1;
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }

    return false;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j)) result++;
    }
  }

  return result;
}

iceCream(4, 5, [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
]);

iceCream(3, 3, [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
]);
