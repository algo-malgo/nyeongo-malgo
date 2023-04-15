const pair = { "}": "{", "]": "[", ")": "(" };

const isCheckBracket = (arr) => {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];
    if (pair[c] === undefined) stack.push(c);
    else {
      if (stack[stack.length - 1] !== pair[c]) return false;
      stack.pop();
    }
  }
  if (stack.length) return false;
  return true;
};

function solution(s) {
  let answer = 0;
  let temp = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (isCheckBracket(temp)) answer++;
    temp.push(temp.shift());
  }
  return answer;
}
