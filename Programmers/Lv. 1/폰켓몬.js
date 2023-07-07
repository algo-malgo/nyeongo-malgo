function solution(nums) {
  const pokemon = new Set(nums);
  return nums.length / 2 >= pokemon.size ? pokemon.size : nums.length / 2;
}
