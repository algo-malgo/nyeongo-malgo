function solution(n, computers) {
  let answer = 0;
  let visited = Array(3).fill(false);

  const dfs = (idx) => {
    visited[idx] = true;
    for (let j = 0; j < computers.length; j++) {
      if (computers[idx][j] === 1 && !visited[j]) dfs(j);
    }
  };

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
