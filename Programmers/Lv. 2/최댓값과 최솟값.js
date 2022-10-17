function solution(s) {
    s = s.split(' ').sort((a,b)=>a-b);
    return `${s.shift()} ${s.pop()}`;
}