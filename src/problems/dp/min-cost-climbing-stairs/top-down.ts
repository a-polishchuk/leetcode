function minCostClimbingStairs(cost: number[]): number {
  const cache = new Map<number, number>();
  return dp(cost, cache, cost.length);
}

function dp(cost: number[], cache: Map<number, number>, step: number): number {
  if (cache.has(step)) {
    return cache.get(step)!;
  }
  if (step < 2) {
    return cost[step];
  }
  const prevMin = Math.min(dp(cost, cache, step - 1), dp(cost, cache, step - 2));
  if (step == cost.length) {
    return prevMin;
  }
  const val = prevMin + cost[step];
  cache.set(step, val);
  return val;
}
