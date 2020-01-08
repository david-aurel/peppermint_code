module.exports.dbl = function(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(n)) {
                return reject('ERROR');
            }
            resolve(n * 2);
        }, 1000);
    });
};

// dbl(6)
//     .then(result => {})
//     .catch(err => {});
