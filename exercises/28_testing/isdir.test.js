const { isdir } = require('./isdir');

test('isdir works correctly for directories. it reunts ture when passed a path that leads to a directory', () => {
    isdir(__dirname, function(err, data) {
        expect(data).toBe(true);
    });
});
