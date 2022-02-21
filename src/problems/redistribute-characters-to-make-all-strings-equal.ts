function makeEqual(words: string[]): boolean {
  const countMap = new Map<string, number>();
  for (const w of words) {
    for (const ch of w) {
      countMap.set(ch, (countMap.get(ch) || 0) + 1);
    }
  }

  for (const count of countMap.values()) {
    if (count % words.length != 0) {
      return false;
    }
  }

  return true;
}
