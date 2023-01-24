const cloneObject = require('../katas/clone-object');

describe('happy paths', () => {
    describe('non-nested obj', () => {
        const source = { a: 1, b: 2 };
        const target = { c: 3 };

        const output = cloneObject(source, target);

        const expected = { a: 1, b: 2 };

        test('source obj not mutated', () => {
            expect(source).toEqual(expected);
        });

        test('target obj mutated', () => {
            expect(target).toEqual(expected);
        });

        test('returned obj equals source', () => {
            expect(output).toEqual(expected);
        });

        test('returned obj memory ref === target; target obj memory ref !== source', () => {
            expect(output).toBe(target);
            expect(target).not.toBe(source);
        });
    });

    describe('nested obj', () => {
        const source = { a: 1, b: { b1: 1, b2: 2 }, c: 3 };
        const target = { c: 3 };

        const output = cloneObject(source, target);

        const expected = { a: 1, b: { b1: 1, b2: 2 }, c: 3 };

        test('source obj not mutated', () => {
            expect(source).toEqual(expected);
        });

        test('target obj mutated', () => {
            expect(target).toEqual(expected);
        });

        test('returned obj equals source', () => {
            expect(output).toEqual(expected);
        });

        test('returned obj memory ref === target; target obj memory ref !== source', () => {
            expect(output).toBe(target);
            expect(target).not.toBe(source);
        });
    });
});
