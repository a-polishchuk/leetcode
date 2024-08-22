type P = Promise<number>

export async function addTwoPromises(promise1: P, promise2: P) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
};