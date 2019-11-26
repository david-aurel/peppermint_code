// Make a page that has on it an element that is 100px by 100px in size, has absolute positioning, and has a solid background color. Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.

//find the square
var square = document.querySelector('.mouseFollow');

//add eventlistener when the mouse moves on the body, set the x and y location equal to the top and left of the square subtracting half of the squares height and width to make it centered
document.addEventListener('mousemove', function(event) {
    square.style.top = event.pageY - 50 + 'px';
    square.style.left = event.pageX - 50 + 'px';
});
