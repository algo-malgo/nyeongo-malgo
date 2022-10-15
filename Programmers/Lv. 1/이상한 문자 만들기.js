function solution(s) {
    let answer = '';
    s = s.split(' ');

    for(let i=0; i<s.length; i++){
        if(s[i]) {
            answer = s[i].split('');
            for(let j=0; j<answer.length; j++){
                (j%2 === 0) ? answer[j] = answer[j].toUpperCase() : answer[j] = answer[j].toLowerCase();
            }
            s[i] = answer.join('');
        } 
    }

    return s.join(' ');
}