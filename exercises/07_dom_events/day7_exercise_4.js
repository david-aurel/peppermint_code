// Make a page that has on it an element that is 200px by 200px in size and has a solid background color. Nest within that element another element that is 50px by 50px in size and has a different solid background color. When the user clicks on the outer element its background color should change to a randomly selected color. However, if the user clicks on the inner element, the inner element's background color should change to a randomly selected background color but the outer element's background color should not change at all.

// find the squares
var outerBox = document.querySelector('.outerColorBox'),
    innerBox = document.querySelector('.innerColorBox');

//random number between 0 and 255
function getRandomColorNumber() {
    return Math.floor(Math.random() * 255);
}

//create random rgb color string
function getColor() {
    var r = getRandomColorNumber(),
        g = getRandomColorNumber(),
        b = getRandomColorNumber(),
        randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    return randomColor;
}

// outer box changes color when clicked
outerBox.addEventListener('click', function() {
    outerBox.style.background = getColor();
});

// inner box changes color when clicked
innerBox.addEventListener('click', function() {
    event.stopPropagation(); // stops the outerBox listener from bubbling
    innerBox.style.background = getColor();
});
