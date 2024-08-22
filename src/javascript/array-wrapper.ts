export class ArrayWrapper {
    private nums: number[];

    constructor(_nums: number[]) {
        this.nums = _nums;
    }

    // returns the sum of all array values
    valueOf(): number {
        return this.nums.reduce((acc, val) => acc + val, 0);
    }

    // return string array representation in a form "[1,2,3,4]"
    toString(): string {
        return `[${this.nums.join(',')}]`;
    }
};
