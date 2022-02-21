function getNeighbor(array: number[], i: number, offset: number): number {
  const l = array.length;
  let index = i + offset;
  if (index >= l) {
    index = index % l;
  } else if (index < 0) {
    index = l + index;
  }
  return array[index];
}

function getInitialSum(array: number[], k: number): number {
  let sum = 0;
  if (k > 0) {
    for (let i = 1; i <= k; i++) {
      sum += getNeighbor(array, 0, i);
    }
  } else {
    for (let i = -1; i >= k; i--) {
      sum += getNeighbor(array, 0, i);
    }
  }
  return sum;
}

function decrypt(code: number[], k: number): number[] {
  if (k == 0) {
    return new Array<number>(code.length).fill(0);
  }
  let sum = getInitialSum(code, k);
  const answer = new Array<number>(code.length);
  answer[0] = sum;
  for (let i = 1; i < answer.length; i++) {
    if (k > 0) {
      sum += getNeighbor(code, i, k) - code[i];
    } else {
      sum += getNeighbor(code, i, -1) - getNeighbor(code, i, k - 1);
    }
    answer[i] = sum;
  }
  return answer;
}
