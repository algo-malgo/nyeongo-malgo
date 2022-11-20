function solution(sizes) {
    let answer = [0,0];

    sizes.map(el => el.sort((a,b) => a-b));
    
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0] > answer[0]) answer[0] = sizes[i][0];
        if(sizes[i][1] > answer[1]) answer[1] = sizes[i][1];
    }

    return answer[0]*answer[1];
}