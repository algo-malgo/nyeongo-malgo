function solution(s) {
  var answer = [];
  let temp = [];

  s.split("").forEach((el, idx) => {
    temp.includes(el)
      ? answer.push(idx - temp.lastIndexOf(el))
      : answer.push(-1);
    temp.push(el);
  });

  return answer;
}
