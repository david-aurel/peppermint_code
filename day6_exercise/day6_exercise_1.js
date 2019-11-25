// Write a function that expects a string representing a selector to be passed as a parameter. The function should find all the elements in the document that match the selector and change their style so that the text they contain is italic, underlined, and bold.

function changeFont(str) {
    //select all elements
    var elements = document.querySelectorAll(str);
    //iterate trough the collection you get back
    for (i in elements) {
        //change style
        elements[i].style.fontStyle = 'italic';
        elements[i].style.fontWeight = 'bold';
        elements[i].style.textDecoration = 'underline';
    }
}
