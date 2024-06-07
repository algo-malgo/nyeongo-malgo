const mixScoville = (food1, food2) => {
  return food1 + food2 * 2;
};

const checkScoville = (arr, K) => {
  let result = true;
  arr.forEach((el) => {
    if (el < K) result = false;
  });
  return result;
};

function solution(scoville, K) {
  let answer = 0;

  scoville.sort((a, b) => a - b);
  if (scoville[0] >= K) return 0;

  while (!checkScoville(scoville, K)) {
    const [f1, f2] = [scoville.shift(), scoville.shift()];
    const mixValue = mixScoville(f1, f2);
    scoville.unshift(mixValue);
    answer++;
    if (scoville.length === 1 && scoville[0] < K) return -1;
    scoville.sort((a, b) => a - b);
  }

  return answer;
}
