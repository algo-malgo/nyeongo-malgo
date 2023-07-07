function solution(name, yearning, photo) {
  let answer = [];
  let temp = 0;

  photo.forEach((el) => {
    for (i = 0; i < el.length; i++) {
      if (name.indexOf(el[i]) !== -1) {
        temp += yearning[name.indexOf(el[i])];
      }
    }
    answer.push(temp);
    temp = 0;
  });

  return answer;
}
