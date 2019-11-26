// Make a page that has on it an element that is 100px by 100px in size and has a solid black border. When the user mouses down on this box, its background should change to a randomly selected color. When the user mouses up on it, its background should change to another randomly selected color.

//find the square
var square = document.querySelector('.mouseColor');

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

// mouse down changes the color of the square
square.addEventListener('mousedown', function() {
    square.style.backgroundColor = getColor();
});

// mouse up changes the color again
square.addEventListener('mouseup', function() {
    square.style.backgroundColor = getColor();
});
