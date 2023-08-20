function solution(cards1, cards2, goal) {
  var answer = "Yes";
  goal.forEach((el) => {
    if (cards1.indexOf(el) === 0) cards1.shift();
    else if (cards2.indexOf(el) === 0) cards2.shift();
    else answer = "No";
  });
  return answer;
}
