export function chunkArray(arr: number[], size: number): number[][] {
    const arrLength = arr.length;
    const chunksCount = Math.ceil(arrLength / size);
    const chunksArray = new Array<number[]>(chunksCount);

    for (let i = 0; i < chunksCount; i++) {
        const start = i * size;
        const end = Math.min((i + 1) * size, arrLength);
        chunksArray[i] = arr.slice(start, end);
    }

    return chunksArray;
};
