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
    getToken().then(token => {
        //2. When we have the token, make a request for tweets
        return Promise.all([
            getTweets(token, 'bbcworld'),
            getTweets(token, 'nytimes'),
            getTweets(token, 'forbes')
        ])
            .then(results => {
                //merge results
                let bbcworld = results[0];
                let nytimes = results[1];
                let forbes = results[2];

                //1 (using concat)
                // let mergedResults = bbcworld.concat(nytimes, forbes);

                //2 (using spread operator)
                let mergedResults = [...bbcworld, ...nytimes, ...forbes];

                // sort merged results using the sort method
                let sorted = mergedResults.sort((a, b) => {
                    //b - a : reversed chronological order (most recent first)
                    //a - b : chronological order (old to new)
                    return new Date(b.created_at) - new Date(a.created_at);
                });

                //3. We then want to filter the data (make it look like our old links.json)
                const filteredTweets = filterTweets(sorted);
                // 4. Send back those filtered tweets as JSON
                res.json(filteredTweets);
            })
            .catch(err => {
                console.log(`ERROR: ${err}`);
            });
    });
});

app.listen(PORT, () => console.log('Twitter ticker listening on Port', PORT));
