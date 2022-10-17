function solution(n) {
    n = n.toString(3).split('').reverse().join('');
    return Number.parseInt(n, 3);
}