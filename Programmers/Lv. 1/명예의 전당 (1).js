function solution(k, score) {
  let answer = [];
  let congrats = [];

  score.map((num) => {
    if (congrats.length < k) congrats.push(num);
    else {
      if (congrats[k - 1] < num) {
        congrats.pop();
        congrats.push(num);
      }
    }
    congrats.sort((a, b) => b - a);
    answer.push(congrats[congrats.length - 1]);
  });

  return answer;
}
