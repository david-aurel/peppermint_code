// multiply n with 10 until n is larger than 1,000,000 and return in
module.exports.increase = function(n) {
    if (isNaN(n) || n <= 0) {
        return 'ERROR';
    }
    while (n <= 1000000) {
        n *= 10;
    }
    return n;
};
