const express = require('express'),
    app = express(),
    PORT = 8080;

const {
    getToken,
    getTweets,
    filterTweets
} = require(`${__dirname}/twitter.js`);

app.use(express.static(`${__dirname}/ticker`));

app.get('/links.json', (req, res) => {
    console.log('a request was made for /links.json');

    //1. We want to get a bearerToken from twitter
    getToken(function(err, bearerToken) {
        if (err) {
            console.log(`error in getToken(): ${err}`);
            return;
        }
        //2. When we have the token, make a request for tweets
        console.log(`in index.js, about to call getTweets(): ${bearerToken}`);

        getTweets(bearerToken, function(err, tweets) {
            if (err) {
                console.log(`error in getTweets(): ${err}`);
                return;
            }
        });
        //3. We then want to filter the data (make it look like our old links.json)
        const filteredTweets = filterTweets(tweets);
        //4. Send back those filtered tweets as JSON
        res.json(filteredTweets);
    });
});

//FAKE TOKEN BEHAVIOUR
// //function to log the token it was given
// function logToken(token) {
//     console.log('I need the function to do something...', token);
// }

// //calling getToken() and passing logToken() as a callback to run after getToken() is finished.
// getToken(logToken);

app.listen(PORT, () => console.log('Twitter ticker listening on Port', PORT));
