function solution(people, limit) {
    var answer = 1;
    let boat = limit;

    people.sort((a,b) => a-b).map(el => {
        if (limit/2 >= el) console.log(el) 
        
        if (boat-el < 0) {
            answer++;
            boat = limit-el;
        } else {
            boat -= boat-el
        }
    })
    console.log(people)
    console.log(answer)

    return answer;
}

solution([70, 80, 50], 100) //3
/*
[70, 50, 80, 50]	100	3
[70, 80, 50]	100	3
*/