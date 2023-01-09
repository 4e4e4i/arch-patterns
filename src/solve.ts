export function solve(a: number, b: number, c: number): number[] {
    const e = 1e-5
    if (Math.abs(a) < e || ![...arguments].every(isFinite)) {
        throw new Error('coefficient is not correct');
    }
    const D = b * b - 4 * a * c;

    if (D > e) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        return [x1, x2];
    } else {
        if (D < -e) {
            return [];
        } else {
            const x = -b / (2 * a);
            return [x, x];
        }
    }
}
