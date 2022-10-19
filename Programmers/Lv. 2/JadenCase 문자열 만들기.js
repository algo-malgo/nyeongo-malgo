function solution(s) {
    s = s.split(' ');
    
    s.forEach((element, index) => {
        element = element.split('');
        for(let i=0; i<element.length; i++){
            if (element[i] === element[i].toUpperCase()) element[i] = element[i].toLowerCase();
        }
        if(isNaN(element[0])) element[0] = element[0].toUpperCase();
        element = element.join('');
        s[index] = element;
    });
    console.log(s.join(' '))

    return s.join(' ');
}

solution("3people unFollowed me");
// "3people Unfollowed Me"