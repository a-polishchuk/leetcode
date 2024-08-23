type MultiDimensionalArray = (number | MultiDimensionalArray)[];

/**
 * Input
 * arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
 * n = 0
 * 
 * Output
 * [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
 */
var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    return flatten(arr, 0, n);
};

function flatten(arr: MultiDimensionalArray, level: number, n: number) {
    if (level >= n) {
        return arr;
    }

    const result: MultiDimensionalArray = [];

    for (const el of arr) {
        if (typeof el === 'number') {
            result.push(el);
        } else {
            result.push(...flatten(el, level + 1, n));
        }
    }

    return result;
}