const City = require('../Models/City');
let data = {
    id: 1,
    city: "New Milford",
    city_ascii: "NM",
    lat: 11,
    lng: 22,
    iso2: 22,
    iso3: 33,
    capital: "dont know",
    admin_name: "anis"
}

test('test instantiation', () => {
    let city = new City(data);
    expect(city).toBeInstanceOf(City);
    expect(city.id).toBe(1);
    expect(city.city).toBe("New Milford");
    expect(city.city_ascii).toBe("NM");
    expect(city.lat).toBe(11);
    expect(city.lng).toBe(22);
    expect(city.iso2).toBe(22);
    expect(city.iso3).toBe(33);
    expect(city.capital).toBe("dont know");
    expect(city.admin_name).toBe("anis");

});
test("test factory method", () => {
        let city = City.create();
        expect(city).toBeInstanceOf(City)
    }
)
