// GLOBAL SCOPE V LOCAL SCOPE....

// var a = "I am in global scope!";
//
// function fn() {
//     var b = "I am in local scope...";
//     // console.log("a: ", a);
//     // console.log("b: ", b);
// }
//
// fn();
//
// console.log("b in global scope..: ", b);

// function hi() {
//     var name = "Pete";
//     console.log("Hello " + name);
// }
//
// hi();
//
// function bye() {
//     console.log("Goodbye " + name);
// }
//
// bye();

// Nested Functions! (closures)
// A way to keep things out of global scope...
//
// function getGetUid() {
//     var uid = 0;
//     return function getUid() {
//         uid++;
//         console.log("My unique ID: ", uid);
//         return uid;
//     };
// }
//
// var getUid = getGetUid();
//
// // console.log(getUid);
//
// getUid();
// getUid();
// var uid = 0;
// getUid();

// HOISTING!

// var a = 100;
// var b = 200;
//
// console.log(a, b);

// var a, b;
// a = 100;
// b = 200;
//
// console.log(a, b);

// a = 100;
// b = 200;
// var a, b;
//
// console.log(a, b);

// What happnns below is that var name get's hoisted.
// The assignment of "Pete" on gets added after the first console log.

// console.log(name);
// var name = "Pete";
// console.log("after assigning...: ", name);

// FUNCTION DECLARATION...
// sayHello();
//
// function sayHello() {
//     console.log("Hello");
// }

// FUNCTION EXPRESSIONS.... (not hoisted)

// sayHello();
// var sayHello = function() {
//     console.log("hello from function expression");
// };

// Don't forget the RETURN keyword..

// Functions can be passed to other functions...

// setTimeout(function(){
//     console.log("I am delayed by 2 seconds....");
// }, 2000);
//
// var fn = function() {
//     console.log("thanks peppermint!");
// };
//
// setTimeout(fn, 2000)
//
// function ingredients(callback) {
//     var chicken = "chicken";
//     var spinach = "spinach";
//     var cheese = "cheese";
//     callback(chicken, spinach, cheese);
// }
//
// ingredients(function(b, c) {
//     console.log(b, c);
// });

// Arguments object!!!

// function hello() {
//     console.log(arguments);
//     console.log("arguments.length: ", arguments.length);
//     console.log("arguments[0]: ", arguments[0]);
// }
//
// hello("Peppermint", 16, 33, 66, 999999);
// hello(12);

// Immediately Invoked Function Expression!

// (function() {
//     var a = 1;
//     console.log(typeof a);
//
// }());
//
// (function() {
//
// }());
// console.log("outside iffe: ", typeof a);

// Recursion!

// function countDown(num) {
//     console.log(num);
//     if (num <= 0) {
//         return;
//     }
//     countDown(num -1);
// }
//
// countDown(10);

// function countDown(num) {
//     console.log(num);
//     if (num > 0) {
//         countDown(num -1);
//     }
// }
//
// countDown(7);
