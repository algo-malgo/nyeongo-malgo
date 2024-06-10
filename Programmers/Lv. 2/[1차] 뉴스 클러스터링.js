const makeMultiset = (str) => {
  const result = [];
  const reg = new RegExp(/[^a-zA-Z]/, "g");

  str.split("").map((e, idx) => {
    if (idx === str.length - 1) return;
    const word = e + str[idx + 1];
    if (word.replace(reg, "").length === 2) result.push(word);
  });

  return result.map((s) => s.toLowerCase());
};

function solution(str1, str2) {
  let answer = 0;
  const set1 = makeMultiset(str1);
  const set2 = makeMultiset(str2);
  const isChecked = new Array(set1.length).fill(false);
  const intersection = [],
    bMinusA = [];

  if (set1.length === 0 && set2.length === 0) return 65536;

  set2.forEach((el) => {
    let sameIdx = set1.indexOf(el);
    if (sameIdx > -1 && !isChecked[sameIdx]) {
      isChecked[sameIdx] = true;
      set1[sameIdx] = "";
      intersection.push(el);
    } else bMinusA.push(el);
  });

  const len = intersection.length;
  answer = len / (len + bMinusA.length + (set1.length - len)); // 교집합 / (교집합 + (B-A) + (A-B))
  return Math.floor(answer * 65536);
}
