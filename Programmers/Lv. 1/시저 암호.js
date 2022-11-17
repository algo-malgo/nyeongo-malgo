function solution(s, n) {
    let answer = '';
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";

    s.split('').map(el=>{
        code = el === el.toUpperCase() ? upper : lower;
        index = code.indexOf(el)+n
        if(index >= code.length) index -= code.length; 

        if(el === " ") answer += " ";
        else answer += code[index];
    })

    return answer;
}