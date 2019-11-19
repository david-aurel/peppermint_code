//Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:
//
// "undefined!"
// "null!"
// "number!"
// "not a number!"
// "string!"
// "boolean!"
// "function!"
// "object!"
// "array!"
// "I have no idea!"

function logType (val) {
    if (typeof val == "undefined") {
        console.log("undefined!");
    } else if (val == null) {
        console.log("null!");
    } else if (Array.isArray(val)) {
        console.log("array!");
    } else if (typeof val == 'object') {
        console.log("object!");
    } else if (typeof val == "function") {
        console.log("function!");
    } else if (typeof val == "boolean") {
        console.log("boolean!");
    } else if (typeof val == "string") {
        console.log("string!");
    } else if (isNaN(val)) {
        console.log("not a number!");
    } else if (typeof val == "number") {
        console.log("number!");
    } else if (val == null) {
        console.log("null!");
    } else {
        console.log("I have no idea!");
    }
}


//calling the function with different arguments to test if it's working
logType(undefined);
logType(null);
logType(1);
logType(NaN);
logType('string');
logType(true);
logType(function fn() {});
logType({a: 'a'});
logType([1, 2, 3]);
