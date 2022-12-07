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