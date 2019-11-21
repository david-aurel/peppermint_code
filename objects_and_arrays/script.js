// Petes Code:

// ARRAYS!

var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'blue'];

// console.log(colors[0]);
//
// colors[0] = 'pink';
//
// console.log(colors[0]);
//
// console.log("length: ", colors.length);
//
// console.log("last thing in an array: ", colors[colors.length - 1]);
//
// // another way to make arrays;
//
// var arr = new Array(4);
// console.log(arr);

// PUSH! - adds to the end of an array...

// colors.push('orange');
// console.log("colors: ", colors);

// POP  - removes from the end of an array...

// colors.pop();
// console.log("colors after popping: ", colors);

// UNSHIFT.. adds to the start of an array...

// colors.unshift('aqua');
// console.log("colors after unshift: ", colors);

// SHIFT - removes from the start of an array...

// colors.shift();
// console.log("colors after shifting...", colors);

// SPLICE!!! -> THIS MUTATES ARRAYS!!!

// var myColors = colors.splice(2,2);

// console.log("myColors: ", myColors);
// console.log("colors: ", colors);

// REVERSE....
// colors.reverse();
//
// console.log(colors);

// SLICE - THIS DOES NOT MUTATE OUR ARRAY....

// var myColors = colors.slice(1,2);
//
// console.log("myColors: ", myColors);
// console.log("colors: ", colors);
//
// var colorsCopy = colors.slice();
//
// console.log("colorsCopy: ", colorsCopy);

// indexOf...

//
// console.log(
//     colors.indexOf('blue')
// );

// filter....

var blueArray = colors.filter(function(color) {
    return color === 'blue';
});

console.log('blueArray: ', blueArray);
var hedgehogs = ['🦔', '🦔', '🦔', '🦔', '🦔'];
