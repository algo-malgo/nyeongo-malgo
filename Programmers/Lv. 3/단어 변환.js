const isCheckWord = (wordA, wordB) => {
  let count = wordA.length;
  for (let i = 0; i < wordA.length; i++) {
    if (wordA[i] === wordB[i]) count--;
  }
  return count === 1 ? true : false;
};

function solution(begin, target, words) {
  const visited = { [begin]: 0 };
  const queue = [begin];

  while (queue.length) {
    const cur = queue.shift();

    if (cur === target) break;

    for (const word of words) {
      if (isCheckWord(word, cur) && !visited[word]) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}
