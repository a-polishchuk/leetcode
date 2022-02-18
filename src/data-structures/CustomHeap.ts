import { Heap } from './Heap';

type Comparator<T> = (a: T, b: T) => number;

export class CustomHeap<T> implements Heap<T> {
  private comparator: Comparator<T>;
  private array: T[];

  constructor(comparator: Comparator<T>, values?: T[]) {
    this.comparator = comparator;
    this.array = values ? [...values] : [];
    const hasChildrenIndex = Math.floor(this.array.length / 2);
    for (let i = hasChildrenIndex; i >= 0; i--) {
      this.heapify(i);
    }
  }

  private getLeftIndex(index: number): number {
    const leftIndex = 2 * index + 1;
    return leftIndex < this.array.length ? leftIndex : -1;
  }

  private getRightIndex(index: number): number {
    const rightIndex = 2 * index + 2;
    return rightIndex < this.array.length ? rightIndex : -1;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  /**
   * Note that both indices should be valid (<= this.array.length)
   */
  private compare(i1: number, i2: number): number {
    return this.comparator(this.array[i1], this.array[i2]);
  }

  private getLargestChildIndex(index: number): number {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (leftIndex < 0) {
      // right index will be -1 as well in this case,
      // don't forget that Heap is a COMPLETE binary tree
      return -1;
    }
    if (rightIndex < 0) {
      return leftIndex;
    }
    return this.compare(leftIndex, rightIndex) >= 0 ? leftIndex : rightIndex;
  }

  private swapNodes(i1: number, i2: number) {
    const tmp = this.array[i1];
    this.array[i1] = this.array[i2];
    this.array[i2] = tmp;
  }

  /**
   * Moves the specified node down the tree until heap condition will be satisfied
   */
  private heapify(index: number) {
    let currIndex = index;
    let largestChildIndex = this.getLargestChildIndex(currIndex);
    while (largestChildIndex >= 0 && this.compare(currIndex, largestChildIndex) < 0) {
      this.swapNodes(currIndex, largestChildIndex);
      currIndex = largestChildIndex;
      largestChildIndex = this.getLargestChildIndex(currIndex);
    }
  }

  public add(val: T) {
    this.array.push(val);
    // now we need to lift new value until heap condition will be satisfied
    let currIndex = this.array.length - 1;
    let parentIndex = this.getParentIndex(currIndex);
    while (currIndex > 0 && this.compare(currIndex, parentIndex) > 0) {
      this.swapNodes(currIndex, parentIndex);
      currIndex = parentIndex;
      parentIndex = this.getParentIndex(currIndex);
    }
  }

  public pop(): T | null {
    const size = this.getSize();
    if (size === 0) {
      return null;
    }
    const lastVal = this.array.pop()!;
    if (size === 1) {
      return lastVal;
    }
    const max = this.array[0];
    this.array[0] = lastVal;
    this.heapify(0);
    return max;
  }

  public peek(): T | null {
    return this.array[0] ?? null;
  }

  public getSize(): number {
    return this.array.length;
  }

  public toArrayString(): string {
    return this.array.toString();
  }

  public toTreeString(): string {
    let result = '';
    let itemsPerLevel = 1;
    let index = 0;
    const height = Math.ceil(Math.log2(this.array.length));
    let space = new Array<string>(Math.pow(2, height)).fill(' ').join(' ');
    while (index < this.array.length) {
      for (let i = 0; i < itemsPerLevel; i++) {
        result += (this.array[index++] ?? '_') + space;
      }
      result += '\n';
      itemsPerLevel *= 2;
      space = space.substring(0, space.length / 2);
    }
    return result;
  }
}

interface Entry {
  key: string;
  value: number;
}

// comparator for a max heap
// function ascending(a: Entry, b: Entry): number {
//   return a.value - b.value;
// }

// comparator for a min heap
function descending(a: Entry, b: Entry): number {
  return b.value - a.value;
}

function test() {
  const heap = new CustomHeap<Entry>(descending);
  heap.add({ key: 'one', value: 1 });
  heap.add({ key: 'seven', value: 7 });
  heap.add({ key: 'two', value: 2 });
  heap.add({ key: 'three', value: 3 });
  heap.add({ key: 'nine', value: 9 });
  heap.add({ key: 'eight', value: 8 });

  while (heap.getSize() > 0) {
    console.log(heap.pop());
  }
}

test();
