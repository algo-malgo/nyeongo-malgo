function solution(n, arr1, arr2) {
    let newArr1 = [], newArr2 = [];
    let answer = [];

    const decoding = (arr) => {
        let map = []
        arr.map(el=>{
            let num = el.toString(2);
    
            while(num.length !== n){
                num = `0${num}`
            }
            map.push(num)
        })
        return map;
    }

    newArr1 = decoding(arr1);
    newArr2 = decoding(arr2);

    for(let i=0; i<n; i++){
        answer[i] = []
        for(let j=0; j<n; j++){
            answer[i] += (newArr1[i][j] == 0 && newArr2[i][j] == 0) ? " " : "#";
        }
    }

    return answer;
}