const Sanitization = require('../src/Sanitization');

test('test the instantiation of the Sanitization class', () => {
    let sanitization = new Sanitization();
    expect(sanitization).toBeInstanceOf(Sanitization);
});

test('test checkIfString method with an integer', () => {
    let result = Sanitization.checkIfString(1);
    expect(result).toBeFalsy();
});

// test throwing error
test('test checkIfString method with a string', () => {
    const result = ()=>Sanitization.checkIfString('hi')
    expect(result).toThrowError("Variable is String");
});




