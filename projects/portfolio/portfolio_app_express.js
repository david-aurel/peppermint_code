const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser');

app.use(express.static(__dirname + '/../'));

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(cookieParser());

app.get('/cookies', (req, res) => {
    res.send(`<h3>To use this site you must accept cookies.</h3>
                <form method='POST'>
                    <input type='checkbox' id='checkbox' name='checkbox'>
                    <label for='checkbox'>ok</label> <br><br>
                    <button>submit</button>
                </form>`);
});

app.post('/cookies', (req, res) => {
    if (req.body.checkbox) {
        res.cookie('cookiesAccepted', true);
        res.redirect('/github_api');
    } else {
        res.redirect('/cookies');
    }
});

app.get('/:project', (req, res) => {
    console.log('boom');

    if (req.cookies.cookiesAccepted) {
        res.sendFile(`${req.params.project}/index.html`);
    } else {
        res.redirect('/cookies');
    }
});
app.listen(8080, () => console.log('listening!'));
