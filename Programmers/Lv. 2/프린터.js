function solution(priorities, location) {
    let max, count = 0;

    while(1){
        max = Math.max.apply(null, priorities);
        let J = priorities.shift();

        if (J === max) {
            count++;
            console.log(count)
            if (location === 0) return count;
        }
        else priorities.push(J);
        location--;

        if (location === -1) location = priorities.length - 1;
    }
}

//solution([2, 1, 3, 2], 2) //1
//solution([1, 1, 9, 1, 1, 1], 0) //5
solution([2,3,3,"2",9,3,3], 3) //return = 6