function solution(answers) {
    let temp = Array(3).fill(0); 
    let numberOne = [1, 2, 3, 4, 5]
    let numberTwo = [2, 1, 2, 3, 2, 4, 2, 5]
    let numberThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
  for (let i = 0; i < answers.length; i++) {
    if (numberOne[i % 5] === answers[i]) temp[0]++;
    if (numberTwo[i % 8] === answers[i]) temp[1]++;
    if (numberThree[i % 10] === answers[i]) temp[2]++;
  }
    
    let maxValue = Math.max(...temp);
    let result = [];

    for(let i=0; i<temp.length; i++) {
        if(temp[i] === maxValue) result.push(i+1)
    }
    
    return result;
}