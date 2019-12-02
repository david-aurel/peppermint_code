//grabbing dom elements
var container = $('#container'),
    topImage = $('#top-image'),
    slider = $('#slider');

//when the cursor enters the slider, adjust the left of the top image and the left of the slider

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
