const { getAlbumNames } = require('./albums');
const spotify = require('./spotify');

jest.mock('./spotify');

test('album names are in alphabetical order', () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                { name: 'Bat Out Of Hell' },
                { name: 'Bat Out Of Hell2' },
                { name: 'Bat Out Of Hell3' }
            ]
        }
    });

    return getAlbumNames('meat loaf').then(albumNames => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
