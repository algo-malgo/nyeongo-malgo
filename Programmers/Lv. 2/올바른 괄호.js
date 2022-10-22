function solution(s){
    s=s.split('');

    let count = [0,0];

    for(let i=s.length-1; i>=0; i--){
        s[i] ==='(' ? count[0] += 1 : count[1] += 1;
        s.pop();
        if(count[0]>count[1]) return false;
    }

    return (count[0]===count[1]) ? true : false;
}