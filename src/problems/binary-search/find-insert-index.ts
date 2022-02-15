/**
 * Uses binary search to find an insert index for a specified value.
 * Note that incoming array should be sorted in ascending order.
 */
export function findInsertIndex(sorted: number[], target: number): number {
  let low = 0;
  let high = sorted.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const val = sorted[mid];
    if (val == target) {
      return mid;
    }
    if (val < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // we can land "to the left" or "to the right" from the
  // insertion positions, that's why we need to check it here
  return sorted[low] < target ? low + 1 : low;
}
