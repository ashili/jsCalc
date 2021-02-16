
const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(1,2);
    expect(result.GetResults()).toBe(3);
});
test('Calculator difference of two numbers', () => {
    let result = Calculator.Difference(3,2);
    expect(result.GetResults()).toBe(1);
});
test('Calculator product of two numbers', () => {
    let result = Calculator.Product(3,2);
    expect(result.GetResults()).toBe(6);
});
test('Calculator quotient of two numbers', () => {
    let result = Calculator.Quotient(4,2);
    expect(result.GetResults()).toBe(2);
});
test('Calculator Root of two numbers', () => {
    let result = Calculator.Root(4,2);
    expect(result.GetResults()).toBe(2);
});
test('Calculator Power of two numbers', () => {
    let result = Calculator.Power(2,2);
    expect(result.GetResults()).toBe(4);
});
test('Calculator adding to calculations', () => {
    Calculator.Quotient(1,2);
    let calculations = Calculator.Calculations
    calculations.forEach(function (calc) {
    });
});
test('Calculator Get Last Calculation', () => {
    Calculator.Product(1,2);
    let CalculationObject = Calculator.getLastCalculation();
    expect(CalculationObject.GetResults()).toBe(2);
});
