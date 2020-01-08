const countries = require('./countries');

test('When find is passed an empty string, it returns an empty array', () => {
    const result = countries.find('');
    expect(result).toEqual([]);
});
