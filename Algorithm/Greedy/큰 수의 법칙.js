function Rule(N, M, K, input){
    // N = 배열의 크기, M = 숫자가 더해지는 횟수, K= 연속 가능 횟수
    input.sort((a,b) => b-a);
    
    return Math.floor(M/K)*input[0]*K + (M%K)*input[1];
}

Rule(5, 8, 3, [2,4,5,4,6]) //46