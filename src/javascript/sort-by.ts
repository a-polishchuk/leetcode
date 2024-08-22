export function sortBy<T>(arr: T[], fn: (val: T) => number): T[] {
    return [...arr].sort((a, b) => fn(a) - fn(b));
};