function maximumDifference(nums: number[]): number {
  let min = Number.POSITIVE_INFINITY;
  let maxDiff = -1;

  for (const val of nums) {
    if (val < min) {
      min = val;
    } else if (val > min) {
      maxDiff = Math.max(maxDiff, val - min);
    }
  }

  return maxDiff;
}
