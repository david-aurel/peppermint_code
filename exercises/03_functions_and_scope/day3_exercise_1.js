// Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

// For Testing
sum(5, 10); //15

sum(5, 10, 15); //30;

sum(5, 10, 15, 100, 200); //330

function sum() {
    // declare the variable that holds the result
    let result = 0;
    //iterate trough the arguments array
    for (let i = 0; i < arguments.length; i++) {
        //add the current val to the var
        result += arguments[i];
    }
    //log and return result
    console.log(result);
    return result;
}
