function solution(strings, n) {
  var answer = [];

  let value = strings.map((el) => {
    let temp = [];
    temp.push(el.split());
    answer.push(temp[n]);

    return temp[n];
  });

  console.log(value);

  return answer;
}

solution(["sun", "bed", "car"], 1); //["car", "bed", "sun"]
//solution(["abce", "abcd", "cdx"], 2); //["abcd", "abce", "cdx"]
