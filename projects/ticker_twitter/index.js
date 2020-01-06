const { getToken } = require('./twitter');

//function to log the token it was given
function logToken(token) {
    console.log('I need the function to do something...', token);
}

//calling getToken() and passing logToken() as a callback to run after getToken() is finished.
getToken(logToken);
