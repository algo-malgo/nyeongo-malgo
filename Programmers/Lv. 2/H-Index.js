function solution(citations) {
    var answer = 0;

    citations.sort((a,b)=>b-a).forEach((e,i) => {
        if(e>=i+1) answer++;
    });

    return answer;
}