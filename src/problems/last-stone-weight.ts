function findInsertIndex(sorted: number[], target: number): number {
  let low = 0;
  let high = sorted.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (sorted[mid] == target) {
      return mid;
    } else if (sorted[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return sorted[low] < target ? low + 1 : low;
}

/**
 * We're using sorted array and binary search to simulate the stones game.
 * Splice operation is pretty heavy, we can use MaxHeap instead.
 */
export function lastStoneWeight(stones: number[]): number {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    const diff = stones.pop()! - stones.pop()!;
    if (diff > 0) {
      const insertIndex = findInsertIndex(stones, diff);
      stones.splice(insertIndex, 0, diff);
    }
  }
  return stones[0] || 0;
}
