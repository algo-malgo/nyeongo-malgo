function solution(s)
{
    let answer = [];
    
    if (s.length % 2 !== 0) return 0

    s.split('').forEach(el => {
        answer[answer.length-1] === el ? answer.pop() : answer.push(el);
    })

    return answer.length === 0 ? 1 : 0;
}