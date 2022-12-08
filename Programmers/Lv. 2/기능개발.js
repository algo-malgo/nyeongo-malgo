function solution(progresses, speeds) {
    let finish = [], answer = [];

    progresses.forEach((e, i) => {
        finish.push(Math.ceil((100-e)/speeds[i]));
    });

    while(finish.length !== 0){
        let count = 1;
        let first = finish.shift()

        if(finish.length === 0) answer.push(count);

        for(let i=0; i<finish.length; i++){
            if (first < finish[i]){
                answer.push(count); 
                for(let j=1; j<count; j++) finish.shift()        
                break;
            } else count++;
            
            // [20, 1] 처럼 마지막 작업도 같이 배포시키고 끝내야 하는 경우
            if (i === finish.length-1 && first >= finish[i]) {
                answer.push(count);
                for(let j=1; j<count; j++) finish.shift()        
                break;
            }
        }
    }

    return answer;
}