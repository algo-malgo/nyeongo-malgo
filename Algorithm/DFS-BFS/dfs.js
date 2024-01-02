const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

function dfs(graph, startNode) {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);
  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
      // ...graph[node]가 더 앞에 있는 이유는, dfs 알고리즘(깊이 우선 탐색)이기 때문!
    }
  }

  return visited;
}

dfs(graph, 1); // [1, 2, 7, 6, 8, 3, 4, 5]
