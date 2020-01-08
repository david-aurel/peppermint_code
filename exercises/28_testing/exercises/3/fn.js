//if argument is string, reverse is. if it's something else, return null. if its an array, call the function again on each item and return array of results.
module.exports = function fn(arg) {
    if (typeof arg !== 'string') {
        if (Array.isArray(arg)) {
            let results = [];
            for (let i = 0; i < arg.length; i++) {
                results.push(fn(arg[i]));
            }
            return results;
        }
        return null;
    }
    return reverseString(arg);

    function reverseString(str) {
        return str
            .split('')
            .reverse()
            .join('');
    }
};
