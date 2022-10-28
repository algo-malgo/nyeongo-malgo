function solution(s) {
    const word = s.split('').map(element => element.toLowerCase())

    for(let i=0; i<word.length; i++){
        if (i===0 || word[i-1] === " ") word[i] = word[i].toUpperCase();
    }
    
    return word.join('');
}
