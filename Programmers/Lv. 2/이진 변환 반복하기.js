const searchZero = (s, answer) => {
    s.split('').forEach(el => {
        if(el === '0') answer[2] += 1;
    });
    answer[0] += 1;
    answer[1] += answer[2];
}

function solution(s) {
    let answer = [0,0,0];

    while(s.length > 1){
        searchZero(s, answer);
        s = (s.length-answer[2]).toString(2);
        answer[2] = 0;    
    }

    answer.pop();

    return answer;
}