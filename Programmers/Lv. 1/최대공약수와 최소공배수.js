function solution(n, m) {
    var answer = [];

    for(let i=n; i>0; i--){
        if(n%i===0 && m%i===0){
            answer.push(i);
            break;
        }
    }

    for(let i=1; i<=n*m; i++){
        if(i%n===0 && i%m===0){
            answer.push(i);
            break;
        } 
    }

    return answer;
}