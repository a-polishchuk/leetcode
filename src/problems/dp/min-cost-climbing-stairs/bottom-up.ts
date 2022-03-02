function minCostClimbingStairs(cost: number[]): number {
  const array = new Array<number>(cost.length);
  for (let i = 0; i < cost.length; i++) {
    if (i < 2) {
      array[i] = cost[i];
    } else {
      array[i] = Math.min(array[i - 1], array[i - 2]) + cost[i];
    }
  }
  const l = array.length;
  return Math.min(array[l - 1], array[l - 2]);
}
