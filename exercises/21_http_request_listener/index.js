const http = require('http');

const server = http.createServer((req, res) => {
    req.on('error', err => console.log('req err', err));
    res.on('error', err => console.log('req err', err));

    if (req.method === 'GET') {
        console.log(
            `req method: '${req.method}', req url: '${req.url}', req header:`,
            req.headers
        );
        res.write(`<p>Hello Get</p>`);
        res.statusCode = 200;
        res.end();
    }

    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            console.log(('body: ', body));
        });

        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;

        res.write(`<p>Hello Post</p>`);
    }
});

server.listen(8080, () => {
    console.log('server is running');
});
