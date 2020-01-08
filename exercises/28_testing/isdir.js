const fs = require('fs');

module.exports.isdir = function(path, callback) {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
        callback(err, files[0].isDirectory());
    });
};

// isdir(__dirname, function(err, data) {});
