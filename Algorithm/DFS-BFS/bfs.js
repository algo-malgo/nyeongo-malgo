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

function bfs(graph, startNode) {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);
  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
      // ....needVisit가 더 앞에 있는 이유는, bfs 알고리즘(너비 우선 탐색)이기 때문!
    }
  }

  return visited;
}

bfs(graph, 1); // [1, 2, 3, 8, 7, 4, 5, 6]
