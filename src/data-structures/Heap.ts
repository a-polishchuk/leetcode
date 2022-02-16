export interface Heap {
  /**
   * Adds new element to the heap.
   * Heap will be reorganized to maintain it's properties (if needed).
   */
  add(val: number): void;

  /**
   * Removes heap top/root element (it's a max/min element for MaxHeap/MinHeap).
   * Heap will be reorganized to maintain it's properties (if needed).
   * @returns top element or null if heap is empty.
   */
  pop(): number | null;

  /**
   * @returns top element or null if heap is empty.
   */
  peek(): number | null;

  /**
   * @returns number of elements in the heap.
   */
  getSize(): number;
}
