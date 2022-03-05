function findKthPositive(arr: number[], k: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    const missingCount = arr[mid] - mid - 1;
    if (missingCount >= k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  const value = arr[low];
  const missing = value - low - 1;
  if (missing >= k) {
    return value - (missing - k + 1);
  } else {
    return value + (k - missing);
  }
}
