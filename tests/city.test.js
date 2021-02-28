const City = require('../Models/City');

test('test creating a city', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test("test factory method",()=>{
    let city = City.create();
    expect(city).toBeInstanceOf(City)
}
)
