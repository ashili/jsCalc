const cities = require ('../data/worldcities.csv')

test('test cities data', () => {
    // creating a a snapshot and if data changes, it will throw an error
    expect(cities).toMatchSnapshot();
});
