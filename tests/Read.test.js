const Read = require('../CSV/Read');

test('test the instantiation of the Read class', () => {
    let read = new Read();
    expect(read).toBeInstanceOf(Read);
});

// test('test getRecords method', () => {
//     let result = Read.getRecords();
//     expect(result).toBe(false);
// });
