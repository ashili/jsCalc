const Read = require('../CSV/Read');
const data = {}

test('test the instantiation of the Read class', () => {
    let read = new Read();
    expect(read).toBeInstanceOf(Read);
    expect(data.id).toBe(data.id);
    expect(data.city_ascii).toBe(data.city_ascii);
    expect(data.lat).toBe(data.lat);
    expect(data.lng).toBe(data.lng);
    expect(data.iso2).toBe(data.iso2);
    expect(data.iso3).toBe(data.iso3);
    expect(data.capital).toBe(data.capital);



});

// test('test getRecords method', () => {
//     let result = Read.getRecords();
//     expect(result).toBe(false);
// });
