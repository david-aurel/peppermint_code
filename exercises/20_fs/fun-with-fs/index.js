const fs = require('fs'),
    myPath = __dirname,
    filesPath = myPath + '/files';

// Part 1

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log('error in readdir: ', err);
        } else {
            console.log(files);
        }
    });
}

logSizes(filesPath);
