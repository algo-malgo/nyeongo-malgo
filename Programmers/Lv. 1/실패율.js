function solution(N, stages) {
  let answer = [];
  let users = stages.length;

  for (let i = 1; i <= N + 1; i++) {
    let tmp = stages.filter((n) => n === i).length;
    console.log(tmp);
    answer.push([i, tmp / users]);
    users -= tmp;
  }
  answer.pop();
  answer.sort((a, b) => b[1] - a[1]);

  return answer.map((el) => el[0]);
}
