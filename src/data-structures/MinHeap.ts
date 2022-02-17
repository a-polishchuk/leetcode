import { Heap } from "./Heap";

export class MinHeap implements Heap<number> {
  private array: number[];

  constructor(values: number[]) {
    this.array;
  }

  private heapify(index: number): void {
    // TODO:
  }

  public add(val: number): void {
    this.array.push(val);
    // lifting the new value 'up' if needed to maintain the heap property
    // TODO:
  }

  public pop(): number | null {
    if (this.getSize() === 0) {
      return null;
    }
    const min = this.array.shift()!;
    this.heapify(0);
    return min;
  }

  public peek(): number | null {
    return this.array[0] ?? null;
  }

  public getSize(): number {
    return this.array.length;
  }

  public toArrayString(): string {
    return this.array.toString();
  }

  public toTreeString(): string {
    // TODO:
    return "";
  }
}
