import { Heap } from './Heap';

export class MinHeap implements Heap<number> {
  private array: number[];

  constructor(values: number[]) {
    this.array = [...values];
    const hasChildrenIndex = Math.floor(this.array.length / 2);
    for (let i = hasChildrenIndex; i >= 0; i--) {
      this.heapify(i);
    }
  }

  private getLeftIndex = (index: number): number => 2 * index + 1;
  private getRightIndex = (index: number): number => 2 * index + 2;
  private getParentIndex = (index: number): number => Math.floor((index - 1) / 2);
  private getLastIndex = (): number => this.array.length - 1;

  private getSmallestChildIndex(index: number): number {
    const lastIndex = this.getLastIndex();
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (leftIndex > lastIndex && rightIndex > lastIndex) {
      return -1;
    }
    const leftChild = this.array[leftIndex] ?? Number.MAX_SAFE_INTEGER;
    const rightChild = this.array[rightIndex] ?? Number.MAX_SAFE_INTEGER;
    return leftChild < rightChild ? leftIndex : rightIndex;
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
    let smallestChildIndex = this.getSmallestChildIndex(currIndex);
    while (smallestChildIndex !== -1 && this.array[currIndex] > this.array[smallestChildIndex]) {
      this.swapNodes(currIndex, smallestChildIndex);
      currIndex = smallestChildIndex;
      smallestChildIndex = this.getSmallestChildIndex(currIndex);
    }
  }

  public add(val: number) {
    this.array.push(val);
    // now we need to lift new value until heap condition will be satisfied
    let currIndex = this.getLastIndex();
    let parentIndex = this.getParentIndex(currIndex);
    while (currIndex > 0 && this.array[currIndex] < this.array[parentIndex]) {
      this.swapNodes(currIndex, parentIndex);
      currIndex = parentIndex;
      parentIndex = this.getParentIndex(currIndex);
    }
  }

  public pop(): number | null {
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

function test() {
  const a = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 8, 9, 5, 6, 2, 4, 7, 8];
  const heap = new MinHeap(a);
  console.log(heap.toTreeString());
  while (heap.getSize() > 0) {
    console.log(heap.pop());
  }
}

test();
