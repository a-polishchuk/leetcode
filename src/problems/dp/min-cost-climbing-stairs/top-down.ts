export function minCostClimbingStairs(cost: number[]): number {
  const cache = new Map<number, number>();
  return dp(cost, cache, cost.length);
}

function dp(cost: number[], cache: Map<number, number>, step: number): number {
  // 1. base cases
  if (step < 2) {
    return cost[step];
  }

  // 2. check for memoized value for a given step
  // memoization is very important for a top-down DP approach
  // without memoization - it's just a recursion
  if (cache.has(step)) {
    return cache.get(step)!;
  }

  // 3. recurrence relation between different states
  const prevMin = Math.min(dp(cost, cache, step - 1), dp(cost, cache, step - 2));
  if (step == cost.length) {
    return prevMin;
  }
  const val = prevMin + cost[step];
  cache.set(step, val);
  return val;
}
