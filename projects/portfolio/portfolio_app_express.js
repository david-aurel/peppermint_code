const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    basicAuth = require('basic-auth');

const auth = function(req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != 'name' || creds.pass != 'pass') {
        res.setHeader(
            'WWW-Authenticate',
            'Basic realm= Enter your credentials'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(cookieParser());

app.use(
    express.urlencoded({
        extended: false
    })
);

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
        res.redirect(req.cookies.url);
    } else {
        res.redirect('/cookies');
    }
});

app.use(function cookieCheck(req, res, next) {
    if (req.cookies.cookiesAccepted) {
        next();
    } else {
        if (!req.cookies.url) {
            res.cookie('url', req.url);
        }
        res.redirect('/cookies');
    }
});

app.use('/spotify_search', auth);

app.use(express.static(__dirname + '/../'));

app.listen(8080, () => console.log('listening!'));
