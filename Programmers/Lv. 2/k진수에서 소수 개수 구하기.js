const isPrime = (n) => {
  if (n === 1 || n === 0) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

function solution(n, k) {
  const primeArr = n.toString(k).split("0");
  let answer = 0;

  for (let i = 0; i < primeArr.length; i++) {
    if (isPrime(Number(primeArr[i]))) answer++;
  }

  return answer;
}
