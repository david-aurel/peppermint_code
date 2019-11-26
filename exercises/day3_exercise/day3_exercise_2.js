// Write a function that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.

waitThenRun(function() {
    console.log('Hello!');
    waitThenRun(function() {
        console.log('Goodbye!');
    }); // logs 'Goodbye!' 1.5 seconds later
}); // logs 'Hello!' 1.5 seconds later

// function that takes an argument
function waitThenRun(callback) {
    // use setTimeout, pass it a function and set the time in ms
    setTimeout(function() {
        //now use the argument we passed in the beginning, assume it's going to be a function and execute it
        callback();
    }, 1500);
}
