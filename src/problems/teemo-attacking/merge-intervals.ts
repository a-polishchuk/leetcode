/**
 * Typical "merge intervals" problem
 */
export function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let totalDuration = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    const poisonStart = timeSeries[i];
    let poisonEnd = poisonStart + duration - 1;
    while (poisonEnd >= timeSeries[i + 1]) {
      i++;
      poisonEnd = timeSeries[i] + duration - 1;
    }
    totalDuration += poisonEnd - poisonStart + 1;
  }

  return totalDuration;
}
