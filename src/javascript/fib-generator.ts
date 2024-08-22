export function* fibGenerator(): Generator<number, any, number> {
    let a = 0;
    let b = 1;

    yield a;
    yield b;

    while (true) {
        const sum = a + b;
        a = b;
        b = sum;
        yield sum;
    }
};
