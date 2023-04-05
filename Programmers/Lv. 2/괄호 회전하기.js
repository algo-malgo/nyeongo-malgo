const checkBracket = (s) => {
  let count = 0;
  let arr = [];

  s.forEach((el) => {
    arr.push(el);

    if (arr.length === 1) return;
    else if (el === ")" && arr[arr.length - 2] === "(") count++;
    else if (el === "}" && arr[arr.length - 2] === "{") count++;
    else if (el === "]" && arr[arr.length - 2] === "[") count++;
  });

  return count === 3 ? 1 : 0;
};

function solution(s) {
  var answer = 0;
  let temp = s.split("");

  for (let i = 0; i < s.length; i++) {
    temp.push(temp[0]);
    temp.shift();
    answer += checkBracket(temp);
  }
  console.log(answer);

  return answer;
}

solution("[](){}");
solution("}]()[{");
solution("[)(]");
solution("}}}");

/*
s	result
"[](){}"	3
"}]()[{"	2
"[)(]"	0
"}}}"	0
*/
