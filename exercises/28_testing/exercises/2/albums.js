const spotify = require('./spotify');

exports.getAlbumNames = function(q) {
    return spotify.search(q, 'album').then(function(data) {
        const albumNames = [];
        for (var i = 0; i < data.albums.items.length; i++) {
            albumNames.push(data.albums.items[i].name);
        }
        albumNames.sort();
        return albumNames;
    });
};

function getAlbumNames(q) {
    return spotify.search(q, 'album').then(function(data) {
        console.log(data.albums.items);

        const albumNames = [];
        for (var i = 0; i < data.albums.items.length; i++) {
            albumNames.push(data.albums.items[i].name);
        }
        albumNames.sort();
        console.log(albumNames);

        return albumNames;
    });
}

getAlbumNames('meat loaf');
