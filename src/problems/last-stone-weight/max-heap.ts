import { MaxHeap } from "../../data-structures/MaxHeap";

export function lastStoneWeight(stones: number[]): number {
  const maxHeap = new MaxHeap(stones);
  while (maxHeap.getSize() > 1) {
    const diff = maxHeap.pop()! - maxHeap.pop()!;
    if (diff > 0) {
      maxHeap.add(diff);
    }
  }
  return maxHeap.peek() || 0;
}
