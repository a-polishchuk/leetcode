type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

export function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    const timeoutId = setTimeout(() => fn(...args), t);
    return () => {
        clearTimeout(timeoutId);
    }
};