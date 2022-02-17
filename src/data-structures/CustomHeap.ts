import { Heap } from "./Heap";

type Comparator<T> = (a: T, b: T) => number;

export class CustomHeap<T> implements Heap<T> {
  private compare: Comparator<T>;
  private array: T[];

  constructor(compare: Comparator<T>, values?: T[]) {
    this.compare = compare;
    this.array = values ? [...values] : [];
  }

  private heapify(index: number) {
    // TODO:
  }

  public add(val: T) {}

  public pop(): T | null {
    return null;
  }

  public peek(): T | null {
    return null;
  }

  public getSize(): number {
    return this.array.length;
  }

  public toArrayString() {
    return this.array.toString();
  }
}
