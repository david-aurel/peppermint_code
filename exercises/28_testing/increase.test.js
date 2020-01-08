const { increase } = require('./increase');

test('passing NaN to increase produces the string "ERROR"', () => {
    const result = increase(NaN);
    expect(result).toBe('ERROR');
});
