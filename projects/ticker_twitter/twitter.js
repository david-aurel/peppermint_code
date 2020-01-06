const secrets = require(`${__dirname}/secrets`);
const https = require('https');

module.exports.getToken = function(callback) {
    console.log('this function gets the bearerToken from twitter');

    let creds = `${secrets.consumerKey}:${secrets.consumerSecret}`,
        encodedCreds = Buffer.from(creds).toString('base64');

    const options = {
        host: 'api.twitter.com',
        path: '/oauth2/token',
        method: 'POST',
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            // 'Content-Lenght': ``,
            // 'Accept-Encoding': 'gzip'
        }
    };

    const cb = function(response) {
        console.log(`response: ${response.statusCode}`);
        if (response.statusCode !== 200) {
            //this means something went wrong
            callback(response.statusCode);
            return;
        }

        var body = '';
        response.on('data', function(chunk) {
            body += chunk;
        });

        response.on('end', function() {
            let parsedBody = JSON.parse(body);
            console.log(`getTweets bearerToken: ${parsedBody.access_token}`);

            //null is the error, and then the access token
            callback(null, parsedBody.access_token);
        });
    };

    const req = https.request(options, cb);

    req.end('grant_type=client_credentials');
};

module.exports.getTweets = function(bearerToken, callback) {
    console.log('this function gets tweets from twitter api');
    const options = {
        host: 'api.twitter.com',
        path:
            '/1.1/statuses/user_timeline.json?screen_name=bbc&tweet_mode=extended',
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + bearerToken
        }
    };

    const cb = function(response) {
        console.log(`response: ${response.statusCode}`);
        if (response.statusCode !== 200) {
            //this means something went wrong
            callback(response.statusCode);
            return;
        }

        var body = '';
        response.on('data', function(chunk) {
            body += chunk;
        });

        response.on('end', function() {
            let parsedBody = JSON.parse(body);

            //null is the error, and then tweets
            callback(null, parsedBody);
        });
    };

    const req = https.request(options, cb);
    req.end();
};
module.exports.filterTweets = function(tweets) {
    console.log('this function filters the response from twitter');
};
