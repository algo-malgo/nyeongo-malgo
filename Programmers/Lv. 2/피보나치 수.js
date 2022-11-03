function solution(n) {
    let fibo = [0,1,1];

    for(let i=3; i<=n; i++){
        fibo.push((fibo[i-2]+fibo[i-1])%1234567)
    }
    
    return fibo.pop();
}
