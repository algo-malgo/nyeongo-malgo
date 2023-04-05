const checkBracket = (s) => {
  let count = 0;
  s.forEach((el) => {
    let arr = [];
    console.log(el);
    if (arr.length === 0) arr.push(el);
    else if (el === ")" && arr[arr.length - 1] === "(") count++;
  });
};

function solution(s) {
  var answer = -1;
  let temp = s.split("");

  for (let i = 0; i < s.length; i++) {
    temp.push(temp[0]);
    temp.shift();
    //console.log(temp);
    checkBracket(temp);
  }

  return answer;
}

solution("[](){}");

/*
s	result
"[](){}"	3
"}]()[{"	2
"[)(]"	0
"}}}"	0
*/
