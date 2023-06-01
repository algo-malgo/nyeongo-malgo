function solution(sequence, k) {
  let answer = [];
  let temp = k;

  for (let i = 0; i < sequence.length; i++) {
    for (let j = i; j < sequence.length; j++) {
      temp -= sequence[j];
      if (temp === 0) answer.push([i, j]);
      else if (temp < 0) break;
    }
    temp = k;
  }

  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
