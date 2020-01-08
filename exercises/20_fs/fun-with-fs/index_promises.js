const fs = require('fs');

logSizes(`${__dirname}/files`).then(() => console.log('done!'));

function logSizes(path) {
    return fs.promises.readdir(path, { withFileTypes: true }).then(files => {
        const promises = [];
        for (let i = 0; i < files.length; i++) {
            const nextPath = `${path}/${files[i].name}`;
            if (files[i].isDirectory()) {
                promises.push(logSizes(nextPath));
            }
            if (files[i].isFile()) {
                promises.push(
                    fs.promises.stat(nextPath).then(stats => {
                        console.log(`${nextPath}: ${stats.size}`);
                    })
                );
            }
        }
        return Promise.all(promises);
    });
}
