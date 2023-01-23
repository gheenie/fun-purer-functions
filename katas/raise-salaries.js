function raiseSalaries(arr, percentage) {
    const employees = JSON.parse( JSON.stringify(arr) );

    employees.forEach( (employee) => {
        // Imprecise floating point values.
        employee.salary = Math.round(employee.salary * (percentage + 100) / 100);
    } );

    return employees;
}

module.exports = raiseSalaries;
