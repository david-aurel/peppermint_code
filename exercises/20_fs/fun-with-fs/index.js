const fs = require('fs'),
    myPath = __dirname,
    filesPath = myPath + '/files';

// Part 1

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log('error in readdir: ', err);
        } else {
            for (let i in files) {
                let elementPath = `${path}/${files[i].name}`;
                fs.stat(elementPath, (err, stats) => {
                    if (err) {
                        console.log('error in stat: ', err);
                    } else {
                        console.log(elementPath, stats.size);
                    }
                });
            }
        }
    });
}

logSizes(filesPath);
