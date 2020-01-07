const express = require('express'),
    app = express(),
    { promisify } = require('util'),
    PORT = 8080;

let { getToken, getTweets, filterTweets } = require(`${__dirname}/twitter.js`);
getToken = promisify(getToken);
getTweets = promisify(getTweets);

app.use(express.static(`${__dirname}/ticker`));

app.get('/links.json', (req, res) => {
    console.log('a request was made for /links.json');

    //1. We want to get a bearerToken from twitter
    getToken().then(bearerToken => {
        //2. When we have the token, make a request for tweets
        getTweets(bearerToken).then(tweets => {
            //3. We then want to filter the data (make it look like our old links.json)
            const filteredTweets = filterTweets(tweets);
            // 4. Send back those filtered tweets as JSON
            res.json(filteredTweets);
        });
    });
});

app.listen(PORT, () => console.log('Twitter ticker listening on Port', PORT));
