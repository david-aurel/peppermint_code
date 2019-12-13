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
                        if (files[i].isFile()) {
                            console.log(elementPath, stats.size);
                        } else {
                            logSizes(elementPath);
                        }
                    }
                });
            }
        }
    });
}

// logSizes(filesPath);

// Part 2

function mapSizes(path) {
    let files = fs.readdirSync(path, { withFileTypes: true }),
        filesMap = {};

    for (let i in files) {
        filesMap[`${files[i].name}`] = '';
    }
    console.log(filesMap);
}

mapSizes(filesPath);
