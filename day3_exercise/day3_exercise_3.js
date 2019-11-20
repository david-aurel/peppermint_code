// Write a function that expects a number as an argument.
// If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'.
// If the number that is passed in is greater than or equal to 1000000 it should simply return the number.
// Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that.

// a function that takes an argument that is expected to be a number
function fn(num) {
    // if the number is less or equal to 0 -OR- the number is NaN
    if (num <= 0 || isNaN(num) == true) {
        //log and return 'ERROR'
        console.log('ERROR');
        return 'ERROR';
        // if the number is greater than a million
    } else if (num >= 1000000) {
        //log and return the number
        console.log(num);
        return num;
        // if nothing of the above is true
    } else {
        //as long as the num is less or equal to a million
        while (num < 1000000) {
            //increment number by multiplying it with ten over and over again
            num *= 10;
        }
        //log and return result
        console.log(num);
        return num;
    }
}

// Run the function
fn(50);
