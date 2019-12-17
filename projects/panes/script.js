//grabbing dom elements
var container = $('#container'),
    topImage = $('#top-image'),
    slider = $('#slider');

//when the cursor moves inside the container, the cursor is clicking down and is not leaving the container, adjust the left of the top image and the left of the slider

// feels like a huge workaround to a simple thing I cant figure out. Needs refactoring
container.on('mousemove', function(e) {
    var x = e.clientX - container.offset().left - 10;
    if (e.buttons === 1) {
        if (x < 400) {
            topImage.css({
                width: x
            });
            slider.css({
                left: x
            });
        }
    }
});
