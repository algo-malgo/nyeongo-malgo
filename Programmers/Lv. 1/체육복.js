function solution(n, lost, reserve) {
    let answer = n-lost.length;
    let realLost = [], realReserve = [];
    let temp = [];
    
    for(let i=1; i<=n; i++){
        // 잃어버렸지만, 여유분이 있는 학생
        if (lost.includes(i) && reserve.includes(i)) answer++;
        // 체육복이 진짜로 없는 학생
        else if (lost.includes(i) && !reserve.includes(i)) realLost.push(i);
        // 빌려줄 체육복이 있는 학생
        else if (!lost.includes(i) && reserve.includes(i)) realReserve.push(i);
    }

    for(let i=0; i<realReserve.length; i++){
        if(realLost.includes(realReserve[i]+1) || realLost.includes(realReserve[i]-1)) temp.push(i)
    }

    new Set(temp).size > realLost.length ? answer+= realLost.length : answer += new Set(temp).size;

    return answer;
}


