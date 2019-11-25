// Write a function that expects a string representing a class name to be passed as a parameter. The function should return an array containing all the elements in the document that have the class that was passed in.

function selectClass(str) {
    // declare empty array and select all elements
    var arr = [];
    var elements = document.querySelectorAll('.' + str);

    //loop trough all elements
    elements.forEach(function(element) {
        //push them to the array
        arr.push(element);
    });

    return arr;
}
