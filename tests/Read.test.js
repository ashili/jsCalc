const Read = require('../CSV/Read');
const City = require('../Models/City')
const file = 'data/worldcities.csv'

test('test the instantiation of the Read class', () => {
    let read = new Read(file, City);

    expect(read).toBeInstanceOf(Read);
});

test('test getRecords method', () => {
    const result = Read.getRecords(file,City);
    expect(result).toHaveLength(6)
});
