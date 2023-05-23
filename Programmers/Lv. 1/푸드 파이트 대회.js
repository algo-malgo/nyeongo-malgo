function solution(food) {
  let answer = "",
    temp = "";

  for (let i = 0; i < food.length; i++) {
    if (food[i] % 2 !== 0) food[i]--;
    for (let j = 0; j < food[i] / 2; j++) {
      answer += i;
    }
  }
  temp = answer;
  answer += 0;

  for (let i = temp.length - 1; i >= 0; i--) {
    answer += temp[i];
  }

  return answer;
}

solution([1, 3, 4, 6]); //"1223330333221"
solution([1, 7, 1, 2]); //"111303111"
