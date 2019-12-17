// require modules
const http = require('http'),
    fs = require('fs');

http.createServer((req, res) => {
    // handling errors
    req.on('error', () => console.log('error in request'));
    res.on('error', () => console.log('error in response'));

    const readStream = fs.createReadStream(
        `${__dirname}/../connect_four/index.html`
    );
    readStream.pipe(res);
}).listen(8080, () =>
    console.log('portfolio server is listening on port 8080')
);
