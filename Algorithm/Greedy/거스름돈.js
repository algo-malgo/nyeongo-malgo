function counter(n){
    const coinType = [500, 100, 50, 10];
    let count = 0;

    coinType.forEach(coin => {
        count += parseInt(n/coin);
        n %= coin;
    })

    return count;
}

counter(1260);