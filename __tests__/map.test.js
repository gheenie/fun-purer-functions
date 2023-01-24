const map = require('../katas/map');

describe('str-only array', () => {
    const input1 = ['a', 'b', 'c'];
    const input2 = (str) => str + '1';

    const output = map(input1, input2);

    test('no mutation of input array', () => {
        const expected = ['a', 'b', 'c'];
        expect(input1).toEqual(expected);
        expect(output).not.toBe(input1);
    });

    test('new obj returned with correct mutation', () => {
        const expected = ['a1', 'b1', 'c1'];
        expect(output).toEqual(expected);
    });
});
