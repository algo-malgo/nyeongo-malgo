function solution(array, commands) {
  var answer = [];

  commands.forEach((el) => {
    answer.push(array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1]);
  });

  return answer;
}
