const handleCheckWord = (wordA, wordB) => {
  let count = wordA.length;
  for (let i = 0; i < wordA.length; i++) {
    if (wordA[i] === wordB[i]) count--;
  }
  return count === 1 ? true : false;
};

function solution(begin, target, words) {
  let answer = 0,
    tempTarget = begin;
  if (!words.includes(target)) return 0;

  while (tempTarget !== target) {
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < begin.length; j++) {
        if (words[i] === tempTarget) continue;
        else if (tempTarget === target) return answer;
        else if (
          words[i][j] === tempTarget[j] &&
          handleCheckWord(words[i], target)
        ) {
          return answer + 2;
        } else if (
          words[i][j] === tempTarget[j] &&
          handleCheckWord(words[i], tempTarget)
        ) {
          tempTarget = words[i];
          answer++;
        } else if (
          words[i][j] === tempTarget[j] &&
          !handleCheckWord(words[i], tempTarget)
        )
          continue;
      }
    }
  }

  return answer;
}
