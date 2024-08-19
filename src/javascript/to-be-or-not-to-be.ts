type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
export function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (target: any) => {
            if (val !== target) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: (target: any) => {
            if (val === target) {
                throw new Error("Equal");
            }
            return true;
        }
    }
};
