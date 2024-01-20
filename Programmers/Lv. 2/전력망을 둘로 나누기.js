function solution(n, wires) {
  let answer = 101;
  const tree = Array.from(Array(n + 1), () => []);

  wires.map((el) => {
    const [v1, v2] = el;
    tree[v1].push(v2);
    tree[v2].push(v1);
  });

  function searchTree(root, exceptNum) {
    const visit = Array.from({ length: n + 1 }, () => false);
    const queue = [root];
    let count = 0;
    visit[root] = true;

    while (queue.length) {
      let index = queue.pop();
      tree[index].forEach((element) => {
        if (element !== exceptNum && visit[element] !== true) {
          visit[element] = true;
          queue.push(element);
        }
      });
      count++;
    }
    return count;
  }

  wires.forEach((el) => {
    const [a, b] = el;
    answer = Math.min(answer, Math.abs(searchTree(a, b) - searchTree(b, a)));
  });

  return answer;
}
