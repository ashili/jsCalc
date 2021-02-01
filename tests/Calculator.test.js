const operations = require('../src/Operations/MathOperations');

test('Calculator adding two numbers',()=>{
    //Act
    let result = operations.Sum(1,2)
    //Assert
    expect(result).toBe(3)
})
