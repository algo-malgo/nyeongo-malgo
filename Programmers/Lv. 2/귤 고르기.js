function solution(k, tangerine) {
  let answer = 0;
  let sizes = {};

  tangerine.forEach((num) => {
    if (num in sizes) sizes[num]++;
    else sizes[num] = 1;
  });

  const sortedKeys = Object.keys(sizes).sort((a, b) => sizes[b] - sizes[a]);

  let sortArr = [];
  for (let i = 0; i < sortedKeys.length; i++) {
    for (let j = 0; j < sizes[sortedKeys[i]]; j++) {
      sortArr.push(sortedKeys[i]);
    }
  }

  answer = new Set(sortArr.slice(0, k));

  console.log(answer.size);
  return answer;
}
solution(6, [1, 3, 2, 5, 4, 5, 2, 3]); //3
solution(4, [1, 3, 2, 5, 4, 5, 2, 3]); //2
solution(2, [1, 1, 1, 1, 2, 2, 2, 3]); //1

/*
k	tangerine	result
6	[1, 3, 2, 5, 4, 5, 2, 3]	3
4	[1, 3, 2, 5, 4, 5, 2, 3]	2
2	[1, 1, 1, 1, 2, 2, 2, 3]	1
*/
