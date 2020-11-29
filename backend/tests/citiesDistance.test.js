
test('Should return distance between Pula and Virovitica', () => {
    expect(getCitiesDirections(44.8683,13.8481,45.8319,17.3839).toEqual(296));
});

test('Should return distance between Zagreb and Berlin', () => {
    expect(getCitiesDirections(45.8144,15.978,52.5244,13.4105).toEqual(769));
});

test('Should return distance between Pula and Trieste', () => {
    expect(getCitiesDirections(44.8683,13.8481,45.6433,13.7903).toEqual(86));
});

test('Fail if null values are provided', () => {
    expect(getCitiesDirections(null).toBeNull());
});

test('Fail if empty string provided', () => {
    expect(getCitiesDirections('').toBeFalsy());
});

test('Fail if undefined provided', () => {
    expect(getCitiesDirections(undefined).toBeUndefined());
});

test('Fail if coordinate is negative', () => {
    expect(getCitiesDirections(-44.8683,13.8481,45.6433,13.7903).toThrow())
});

test('Fail if string provided', () => {
    expect(getCitiesDirections('hello').toThrow());
});

test('Fail if object provided', () => {
    expect(getCitiesDirections({}).toThrow());
});

test('Fail if latitude is missing', () => {
    expect(getCitiesDirections(13.8481,45.6433,13.7903).toThrow());
});

test('Fail if longitude is missing', () => {
    expect(getCitiesDirections(44.8683,45.6433,13.7903).toThrow());
});