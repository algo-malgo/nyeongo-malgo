function solution(brown, yellow) {
    let grid=[], size=[];

    for(i=1; i<=brown+yellow; i++){
        if((brown+yellow)%i === 0) grid.push(i)
    }

    console.log(grid);
    grid.length%2===0 
    ? size.push(grid[grid.length/2], grid[grid.length/2-1])
    : size.push(grid[parseInt(grid.length/2)], grid[parseInt(grid.length/2)]);
    
    if(grid[grid.length/2+1] === yellow+2) size = [grid[grid.length/2+1], grid[grid.length/2-2]]
    console.log(grid);
    console.log(size);
    return size;
}

solution(18,6)
// 18, 6 => [8, 3]
/*
brown	yellow	return
10	2	[4, 3]
8	1	[3, 3]
24	24	[8, 6]
*/