import { CustomHeap } from '../../data-structures/CustomHeap';

function findRowStrength(row: number[]): number {
  let low = 0;
  let high = row.length - 1;
  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    if (row[mid] == 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return row[low] == 0 ? low : low + 1;
}

interface Entry {
  index: number;
  strength: number;
}

export function kWeakestRows(mat: number[][], k: number): number[] {
  const heap = new CustomHeap<Entry>((a, b) => {
    if (a.strength == b.strength) {
      return b.index - a.index;
    }
    return b.strength - a.strength;
  });
  for (let i = 0; i < mat.length; i++) {
    heap.add({
      index: i,
      strength: findRowStrength(mat[i]),
    });
  }
  const answer = new Array<number>(k);
  let index = 0;
  while (index < k) {
    answer[index] = heap.pop()!.index;
    index++;
  }
  return answer;
}
