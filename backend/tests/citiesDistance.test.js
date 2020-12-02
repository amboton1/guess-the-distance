
const { distance } = require('../utils/distance-calculator');

test('Should return distance between Pula and Virovitica', () => {
    expect(distance(44.8683,13.8481,45.8319,17.3839)).toEqual(296);
});

test('Should return distance between Zagreb and Berlin', () => {
    expect(distance(45.8144,15.978,52.5244,13.4105)).toEqual(769);
});

test('Should return distance between Pula and Trieste', () => {
    expect(distance(44.8683,13.8481,45.6433,13.7903)).toEqual(86);
});

test('Should return distance between Zagreb and Sydney', () => {
    expect(distance(45.8144, 15.978,-33.8679, 151.2073)).toEqual(16027);
});

test('Fail if null values are provided', () => {
    expect(distance(null)).toBe(0);
});

test('Fail if undefined provided', () => {
    expect(distance(undefined)).toBe(0);
});

test('Fail if string provided', () => {
    expect(distance('hello')).toBe(NaN);
});

test('Fail if object provided', () => {
    expect(distance({})).toBe(NaN);
});

test('Fail if latitude is missing', () => {
    expect(distance(13.8481,45.6433,13.7903)).toBe(NaN);
});

test('Fail if longitude is missing', () => {
    expect(distance(44.8683,45.6433,13.7903)).toBe(NaN);
});