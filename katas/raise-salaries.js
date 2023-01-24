function roundTo2Decimals(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}
  

function raiseSalaries(arr, percentage) {
    const employees = JSON.parse( JSON.stringify(arr) );

    employees.forEach( (employee) => {
        // Imprecise floating point values.
        employee.salary = roundTo2Decimals(employee.salary * (percentage + 100) / 100);
    } );

    return employees;
}

module.exports = raiseSalaries;
