function solution(number, k) {
  var answer = "";
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }

  stack.splice(number.length - k, k);
  answer = stack.join("");

  return answer;
}
