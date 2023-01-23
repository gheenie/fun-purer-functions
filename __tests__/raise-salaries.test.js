const raiseSalaries = require('../katas/raise-salaries');

describe('', () => {
    test('no mutation of input array and objects', () => {
        const input1 = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
        ];
        const input2 = 10;

        const output = raiseSalaries(input1, input2);

        const expected = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
        ];
        expect(input1).toEqual(expected);
    });

    test('multiple employees', () => {
        const input1 = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
        ];
        const input2 = 10;

        const output = raiseSalaries(input1, input2);

        const expected = [
            { name: "Alice", salary: 3300 },
            { name: "Bob", salary: 2200 },
            { name: "Vel", salary: 4950 },
        ];
        expect(output).toEqual(expected);
    });
});
