const { increase } = require('./increase');

test('passing NaN to increase produces the string "ERROR"', () => {
    expect(increase(NaN)).toBe('ERROR');
});

test('Passing 0 to increase produces string "ERROR"', () => {
    expect(increase(0)).toBe('ERROR');
});

test('passing a number greater than 0 produces that number multiplied by 10 until greater than or equal to a million', () => {
    expect(increase(1)).toBeGreaterThanOrEqual(1000000);
});
