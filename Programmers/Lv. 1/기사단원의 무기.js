function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Number(i / 2); j++) {
      if (i % j === 0) count++;
    }
    count + 1 > limit ? (answer += power) : (answer += count + 1);
  }
  return answer;
}
