const { readdir, stat } = require('fs').promises,
    fs = require('fs'),
    myPath = __dirname,
    filesPath = myPath + '/files';

// Part 1 using promises instead of callbacks
function logSizes(path) {
    readdir(path, { withFileTypes: true }).then(files => {
        for (let i in files) {
            let elementPath = `${path}/${files[i].name}`;
            if (files[i].isFile()) {
                stat(elementPath).then(stats =>
                    console.log(`${elementPath}: ${stats.size}`)
                );
            } else {
                logSizes(elementPath);
            }
        }
    });
}

logSizes(filesPath);

// Part 2

function mapSizes(path) {
    let files = fs.readdirSync(path, { withFileTypes: true }),
        filesMap = {};
    for (let i in files) {
        let elementPath = `${path}/${files[i].name}`,
            elementName = `${files[i].name}`;
        if (files[i].isFile()) {
            filesMap[elementName] = fs.statSync(elementPath).size;
        } else {
            filesMap[elementName] = mapSizes(elementPath);
        }
    }
    return filesMap;
}

let mapSizesJSON = JSON.stringify(mapSizes(filesPath), null, 4);
fs.writeFileSync(`${myPath}/files.json`, mapSizesJSON);
