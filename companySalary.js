// Calculate is the total salary has to be provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateTotalSalary(employees){
    let totalMonthlySalary = 0;

    for(let i = 0; i < employees.length; i++){
        const employee = employees[i];
        const currentSalary = employee.increment * employee.experience;
        const total = currentSalary + employee.starting;
        totalMonthlySalary += total;
    }
    return totalMonthlySalary;
}

const totalSalary = calculateTotalSalary(employees);
console.log('Total monthly salary:', totalSalary);

// Output => Total monthly salary: 149000