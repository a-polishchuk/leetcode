export function rob(nums: number[]): number {
  const cache = new Map<number, number>();
  return dp(nums, cache, nums.length - 1);
}

/**
 * Recurrent DP top-down function.
 * In this case we have only one state variable - i-th house.
 * Our dp function will return max money robber can get for the i-th house.
 */
function dp(nums: number[], cache: Map<number, number>, i: number): number {
  // defining the base cases
  if (i == 0) {
    return nums[0];
  }
  if (i == 1) {
    return Math.max(nums[0], nums[1]);
  }

  // checking if we can get a memoized result to avoid duplicated computations
  // NOTE: memoization is a very important part of a top-down DP approach
  if (cache.has(i)) {
    return cache.get(i)!;
  }

  // defining the reccurence relation between different states
  const answer = Math.max(
    dp(nums, cache, i - 1), // means that we will not rob i-th house
    dp(nums, cache, i - 2) + nums[i], // we will rob i-th house (and will not do previous)
  );
  cache.set(i, answer);
  return answer;
}
