import { chunkArray } from './chunk-array';

describe('chunk', () => {
    it('should split an array into chunks of the given size', () => {
        const result = chunkArray([1, 2, 3, 4, 5], 2);
        expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should handle cases where the array length is a multiple of the chunk size', () => {
        const result = chunkArray([1, 2, 3, 4], 2);
        expect(result).toEqual([[1, 2], [3, 4]]);
    });

    it('should handle cases where the chunk size is greater than the array length', () => {
        const result = chunkArray([1, 2, 3], 5);
        expect(result).toEqual([[1, 2, 3]]);
    });

    it('should handle an empty array', () => {
        const result = chunkArray([], 3);
        expect(result).toEqual([]);
    });

    it('should handle cases where the chunk size is 1', () => {
        const result = chunkArray([1, 2, 3, 4], 1);
        expect(result).toEqual([[1], [2], [3], [4]]);
    });
});
