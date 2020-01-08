const dbl = require('./dbl');

test('dbl return argument times 2', () => {
    return dbl(2).then(result => {
        expect(result.toBe(4));
    });
});

test('dbl rejects error message if NaN is passed', () => {
    return dbl('pizza').catch(err => {
        expect(err).toBe('ERROR');
    });
});
