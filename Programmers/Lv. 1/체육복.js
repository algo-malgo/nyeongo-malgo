function solution(n, lost, reserve) {
    //전체 학생의 수 n, 
    //체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
    //여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
    let answer = n-lost.length;
    let realLost = [], realReserve = [];
    let temp = [];
    
    for(let i=1; i<=n; i++){
        // 잃어버렸지만, 여유분이 있는 학생
        if (lost.includes(i) && reserve.includes(i)) answer++;
        // ㄹㅇ 없는 학생
        else if (lost.includes(i) && !reserve.includes(i)) realLost.push(i);
        // ㄹㅇ 여유분이 있는 학생
        else if (!lost.includes(i) && reserve.includes(i)) realReserve.push(i);
    }
    console.log(realLost)
    console.log(realReserve)
    for(let i=0; i<realReserve.length; i++){
        if(realLost.includes(realReserve[i]-1)) temp.push(realReserve[i]-1);
        else if(realLost.includes(realReserve[i]+1)) temp.push(realReserve[i]+1);

    }
    console.log(temp)

    answer += new Set(temp).size;
    console.log(answer)
    return answer;
}

//solution(5, [2,4], [1,3,5]); //5
//solution(5, [2,4], [3]); //4
solution(3, [3], [1]); //2

/*
n	lost	reserve	return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	4
3	[3]	[1]	2
*/