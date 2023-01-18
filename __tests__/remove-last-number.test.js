const removeLastNumber = require('../remove-last-number');

describe('Remove last number from an array of numbers', () => {
    test('Input array not mutated', () => {
        const input = [];
        
        removeLastNumber(input);

        expect(input).toEqual([]);
    });
    
    test('empty array', () => {
        const input = [];

        const output = removeLastNumber(input);

        expect(output).toEqual([]);
    });

    test('one element', () => {
        const input = [4];

        const output = removeLastNumber(input);

        expect(output).toEqual([]);
    });

    test('multiple elements', () => {
        const input = [4, 1, 3, 2];

        const output = removeLastNumber(input);

        expect(output).toEqual([4, 1, 3]);
    });
});
