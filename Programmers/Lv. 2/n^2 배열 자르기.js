function solution(n, left, right) {
  const arr = [],
    result = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
    result.push(i);
  }

  while (arr.length > 1) {
    arr.shift();
    let k = arr[0];
    for (let i = 0; i < n; i++) {
      if (k > 0) result.push(arr[0]);
      else result.push(result[i]);
      k--;
    }
  }

  return result.slice(left, right + 1);
}
