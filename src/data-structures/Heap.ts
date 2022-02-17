export interface Heap<T> {
  /**
   * Adds new element to the heap.
   * Heap will be reorganized to maintain it's properties (if needed).
   */
  add(val: T): void;

  /**
   * Removes heap top/root element (it's a max/min element for MaxHeap/MinHeap).
   * Heap will be reorganized to maintain it's properties (if needed).
   * @returns top element or null if heap is empty.
   */
  pop(): T | null;

  /**
   * @returns top element or null if heap is empty.
   */
  peek(): T | null;

  /**
   * @returns number of elements in the heap.
   */
  getSize(): number;
}
