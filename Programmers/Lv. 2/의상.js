function solution(clothes) {
  let answer = 1;
  let match = {};

  clothes.forEach((el) => {
    el[1] in match ? match[el[1]]++ : (match[el[1]] = 1);
  });

  for (let n in match) {
    answer *= match[n] + 1;
  }

  return answer - 1;
}
