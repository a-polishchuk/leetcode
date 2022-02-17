import { MinHeap } from "../data-structures/MinHeap";

export class KthLargest {
  private k: number;
  private minHeap: MinHeap;

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.minHeap = new MinHeap(nums);
    this.removeRest();
  }

  private removeRest() {
    while (this.minHeap.getSize() > this.k) {
      this.minHeap.pop();
    }
  }

  add(val: number): number {
    this.minHeap.add(val);
    this.removeRest();
    return this.minHeap.peek()!;
  }
}
