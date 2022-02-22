function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let totalDuration = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    const interval = timeSeries[i + 1] - timeSeries[i];
    // do not add full duration if the next attack starts
    // before the current ends
    totalDuration += Math.min(interval, duration);
  }

  // last duration is always full, we can add it outside of a loop
  totalDuration += duration;

  return totalDuration;
}
