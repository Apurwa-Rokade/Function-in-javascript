// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax() {
    // Closure containing tax rates based on income ranges
    const taxRates = [
        { range: 10000, rate: 0.1 },
        { range: 30000, rate: 0.15 },
        { range: 60000, rate: 0.2 },
        { range: Infinity, rate: 0.25 }
    ];

    // Inner function that calculates tax based on income
    return function(income) {
        let tax = 0;
        for (let i = 0; i < taxRates.length; i++) {
            if (income > taxRates[i].range) {
                tax += (taxRates[i].range - (i === 0 ? 0 : taxRates[i - 1].range)) * taxRates[i].rate;
            } else {
                tax += (income - (i === 0 ? 0 : taxRates[i - 1].range)) * taxRates[i].rate;
                break;
            }
        }
        return tax;
    };
}

// Testing the calculateTax function with various incomes
const taxCalculator = calculateTax();

// Test cases with different incomes
const income1 = 5000;
const income2 = 15000;
const income3 = 45000;
const income4 = 80000;

console.log(`Tax for income $${income1}: $${taxCalculator(income1)}`);
console.log(`Tax for income $${income2}: $${taxCalculator(income2)}`);
console.log(`Tax for income $${income3}: $${taxCalculator(income3)}`);
console.log(`Tax for income $${income4}: $${taxCalculator(income4)}`);
