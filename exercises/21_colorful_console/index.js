const chalk = require('chalk'),
    http = require('http'),
    querystring = require('querystring');

console.log(chalk.cyan('this text is cyan'));

const server = http.createServer((req, res) => {
    //handling errors so the server doesn't shut down
    req.on('error', err => console.log('req err', err));
    res.on('error', err => console.log('req err', err));

    if (req.method === 'GET') {
        res.write(`<!doctype html>
                    <html>
                    <title>Colors</title>
                    <form method="POST">
                    <input type="text" name="first" placeholder='first' autocomplete='off'>
                    <select name="color">
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="gray">gray</option>
                        <option value="magenta">magenta</option>
                        <option value="cyan">cyan</option>
                    </select>
                    <button type="submit">Go</button>
                    </form>
                    </html>`);
        res.end();
    }

    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            let parsedBody = querystring.parse(body),
                text = parsedBody.first,
                color = parsedBody.color;

            console.log(chalk`{${color} ${text}}`);

            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.write(`<a href='/' style='color: ${color}'>Hello ${text}</a>`);
        });
    }
});

server.listen(8080, () => console.log('server listening on port 8080'));
