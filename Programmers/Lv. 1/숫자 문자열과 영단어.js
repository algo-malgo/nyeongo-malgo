function solution(s) {
  const englishWord = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;

  for (let i = 0; i < englishWord.length; i++) {
    let arr = answer.split(englishWord[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
