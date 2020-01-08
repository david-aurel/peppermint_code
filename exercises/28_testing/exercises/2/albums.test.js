const { getAlbumNames } = require('./albums');
const spotify = require('./spotify');
jest.mock('./spotify');

const mockData = {
    albums: {
        items: [
            { name: 'Bat Out Of Hell' },
            { name: 'Bat Out Of Hell2' },
            { name: 'Bat Out Of Hell3' }
        ]
    }
};

test('album names are in alphabetical order', () => {
    spotify.search.mockResolvedValue(mockData);

    return getAlbumNames('meat loaf').then(albumNames => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
