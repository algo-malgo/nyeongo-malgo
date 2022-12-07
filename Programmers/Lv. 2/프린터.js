function solution(priorities, location) {
    let answer = location;
    let max = Math.max.apply(null, priorities);
    let count = priorities.length

    while(count > 0){
        for(let i=0; i<priorities.length; i++){
            if (priorities[0] !== max) {
                answer --;
                priorities.shift();
                priorities.push(priorities[i]);
            }
            else max = Math.max.apply(null, priorities);
        }
        count--;
    }

    return answer<0 ? priorities.length + answer + 1 : answer + 1;
}

solution([2, 1, 3, 2], 2) //1
//solution([1, 1, 9, 1, 1, 1], 0) //5
//solution([2,3,3,"2",9,3,3], 3) //return = 6