const http = require('http');

const server = http.createServer((req, res) => {
    req.on('error', err => console.log('req err', err));
    res.on('error', err => console.log('req err', err));
    console.log(
        `req method: '${req.method}', req url: '${req.url}', req header:,${req.headers}`
    );

    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<!doctype html>
                    <html>
                    <title>Hello World!</title>
                    <p>Hello World!
                    </html>`);
        res.end();
    } else if (req.method === 'HEAD') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end();
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            console.log(('body: ', body));
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    } else {
        res.statusCode = 405;
        res.end();
    }
});

server.listen(8080, () => {
    console.log('server is running');
});
