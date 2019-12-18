const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    getHtmlString = require('module');

app.use(express.static(__dirname + '/../'));

app.get('/cookies', (req, res) => {
    res.send(`<h3>To use this site you must accept cookies.</h3>
                <input type='checkbox' id='checkbox' name='checkbox'>
                <label for='checkbox'>ok</label> <br><br>
                <button>submit</button>`);
});

app.get('/:project', (req, res) => {
    res.sendFile(`${req.params.project}/index.html`);
});

app.listen(8080, () => console.log('listening!'));
