//export this function for other scripts to use
//getToken() takes a callback function as an argument. The callback will be logToken(). It will run, after getToken() is finished, because of the nature of callbacks.
module.exports.getToken = function(callback) {
    let token;
    setTimeout(() => {
        token = 'My-fake-token';
        console.log('about to return token...');
        callback(token);
    }, 1000);
};
