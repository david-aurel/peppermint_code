// require modules
const http = require('http'),
    fs = require('fs'),
    path = require('path');

http.createServer((req, res) => {
    // handling errors
    req.on('error', () => console.log('error in request'));
    res.on('error', () => console.log('error in response'));

    const readStream = fs.createReadStream(
        `${__dirname}/../../projects/connect_four/index.html`
    );
    readStream.pipe(res);

    if (req.method != 'GET') {
        res.statusCode = 405;
        return res.end();
    }
    console.log(
        'normalized path: ',
        path.normalize(`../../projects/connect_four/index.html`)
    );

    const filePath = `${__dirname}/../../projects/${req.url}`;

    if (
        !path
            .normalize(filePath)
            .startsWith(`/Users/David/Desktop/Code/peppermint-code/projects/`)
    ) {
        res.statusCode = 403;
        console.log('intruder!!!');
        return res.end();
    }
}).listen(8080, () =>
    console.log('portfolio server is listening on port 8080')
);
