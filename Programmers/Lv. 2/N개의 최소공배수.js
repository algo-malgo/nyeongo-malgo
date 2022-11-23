function solution(arr) {
    arr.sort((a,b)=>a-b)
    let answer = arr[0];
    let result = [];
    let temp = [];
    
    const recursion = (num) => {
        for(let i=0; i<num.length; i++){
            if (num[i]%answer !== 0) result.push(num[i]);
            else if(num[i]/answer === 1) result.push(num[i]);
            else temp.push(num[i]/answer);
        }
    }
    recursion(arr);
    answer = temp[0];
    //temp = [];
    recursion(temp);
    console.log(answer)
    console.log(temp)
    console.log(result)
    answer = 1;
    result.forEach(el=>{
        answer *= el;
    })
    console.log(answer)

    return answer;
}

solution([2,6,8,14])

/*
arr	result 
[2,6,8,14]	168
[1,2,3]	6

2 3 4 7 = 8*21 = 168
1 2 3 = 6
*/