import { solve } from "../src/solve";

describe('test solve function', () => {
    test.each([
        { params: [1, 0, 1], expected: [] },
        { params: [1, 0, -1], expected: [1, -1] },
        { params: [2, 1e-5, 1e-6], expected: [-25e-7, -25e-7] },
    ])('should return $expected array with params $params', ({ params, expected}) => {
        const [a, b, c] = params;
        expect(solve(a, b, c)).toEqual(expected)
    })

    test.each([
        { params: [1e-7, 1, 1] },
        { params: [Infinity, 1, 1] },
        { params: [1, NaN, 1] },
        { params: [1, 2, NaN] },
    ])('should throw error with incorrect coefficients $params', ({ params }) => {
        const [a, b, c] = params
        expect(() => solve(a, b, c)).toThrow('coefficient is not correct')
    })
})
