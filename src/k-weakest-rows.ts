function getStrength(row: number[]): number {
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

function kWeakestRows(mat: number[][], k: number): number[] {
  const map = new Map<number, number[]>();
  for (let i = 0; i < mat.length; i++) {
    const strength = getStrength(mat[i]);
    let array = map.get(strength);
    if (!array) {
      array = [];
      map.set(strength, array);
    }
    array.push(i);
  }

  const answer = new Array<number>(k);
  let count = 0;
  let str = 0;
  while (count < k) {
    const array = map.get(str++);
    if (!array) {
      continue;
    }
    for (const index of array) {
      answer[count++] = index;
      if (count == k) {
        break;
      }
    }
  }
  return answer;
}
