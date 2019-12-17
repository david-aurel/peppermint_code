// require modules
const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    getHtmlString = require('./getHtmlString.js');
getHtmlString('david');

const contentTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml'
};

http.createServer((req, res) => {
    // handling errors
    req.on('error', () => console.log('error in request'));
    res.on('error', () => console.log('error in response'));

    if (req.method != 'GET') {
        res.statusCode = 405;
        return res.end();
    }

    const filePath = `${__dirname}/../../projects${req.url}`;

    if (
        !path
            .normalize(filePath)
            .startsWith(`/Users/David/Desktop/Code/peppermint-code/projects/`)
    ) {
        res.statusCode = 403;
        console.log('intruder!!!');
        return res.end();
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log('error in stat: ', err);
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isFile()) {
            // we want to send back the correct content type
            res.setHeader('Content-Type', contentTypes[path.extname(filePath)]);

            // pipe the file the user requested
            const readStream = fs.createReadStream(`${filePath}`);
            readStream.pipe(res);
            readStream.on('error', err => {
                console.log('error in readStream:', err);
                res.statusCode = 500;
                return res.end();
            });
        } else {
            if (req.url.endsWith('/')) {
                const readStream = fs.createReadStream(
                    `${filePath}/index.html`
                );
                res.setHeader('Content-Type', 'text/html');
                readStream.pipe(res);
                readStream.on('error', err => {
                    console.log('error in readStream:', err);
                    res.statusCode = 500;
                    return res.end();
                });
            } else {
                res.setHeader('Location', `${req.url}/`);
                res.statusCode = 302;
                res.end();
            }
        }
    });
}).listen(8080, () =>
    console.log('portfolio server is listening on port 8080')
);
