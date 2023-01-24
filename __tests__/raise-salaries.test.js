const raiseSalaries = require('../katas/raise-salaries');

describe('', () => {
    const input1 = [
        { name: "Alice", salary: 3000 },
        { name: "Bob", salary: 2000 },
        { name: "Vel", salary: 4500 },
    ];
    const input2 = 10;

    const output = raiseSalaries(input1, input2);

    test('no mutation of input array and objects', () => {
        const expected = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
        ];
        expect(input1).toEqual(expected);
    });

    test('new obj returned with correct mutation', () => {
        const expected = [
            { name: "Alice", salary: 3300 },
            { name: "Bob", salary: 2200 },
            { name: "Vel", salary: 4950 },
        ];
        expect(output).toEqual(expected);
    });
});
