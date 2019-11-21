// Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.

//declare getLessThanZero()
function getLessThanZero(arr) {
    //use filter to iterate trough the array
    return arr.filter(function(num) {
        // return when the current value is lower than 0
        return num < 0;
    });
}

// call getLessThanZero() and pass in arguments
getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
getLessThanZero([1, 2]); //[]
