function solution(numbers) {
    var answer = 45;

    for(let i=0; i<numbers.length; i++){
        answer -= numbers[i];
    }

    return answer;
}