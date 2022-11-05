function solution(n) {
    const num = n.toString(2).split('').filter(el => el === '1').length;
    
    while(1) {
        n++;
        if (num === n.toString(2).split('').filter(el => el === '1').length) return n;
    }
}