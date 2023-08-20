function solution(n, left, right) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < j && i + 1 <= j) arr[i][j] = j + 1;
      else arr[i][j] = i + 1;
    }
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) result.push(arr[i][j]);
  }

  return result.slice(left, right + 1);
}
