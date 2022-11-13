function solution(n, words) {
    let answer = [];
    let success = [];

    for(let i=0; i<words.length; i++){
        if (i === 0) success.push(words[i]);
        else if (!success.includes(words[i]) && String(words[i-1]).slice(-1) === String(words[i]).slice(0,1)) {
            success.push(words[i]);
        } else {
            answer.push((i%n)+1, parseInt(i/n)+1);
            return answer;
        }
    }
    return [0,0];
}