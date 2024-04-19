function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  const newCities = cities.map((city) => city.toLowerCase());
  if (cacheSize === 0) return cities.length * 5;

  newCities.forEach((el) => {
    if (cache.includes(el)) {
      answer++;
      cache.splice(cache.indexOf(el), 1);
      cache.push(el);
    } else {
      if (cache.length >= cacheSize) cache.shift();
      cache.push(el);
      answer += 5;
    }
  });

  return answer;
}
