(() => {
    var sheep = document.querySelectorAll('#sheep img'),
        dots = document.querySelectorAll('.dot'),
        arrows = document.querySelectorAll('.arrow'),
        current = 0,
        timer,
        animation,
        nextSlide;

    // //remove the offscreen-left class from the sheep that has it as soon as the animation is over, i.e. moving it over to the right. Call the moveSlide() again.
    document.addEventListener('transitionend', function(e) {
        if (e.target.classList.contains('offscreen-left')) {
            e.target.classList.remove('offscreen-left');
            timer = setTimeout(moveSlide, 2000);
            animation = false;
        }
    });

    function moveSlide(nextSlide) {
        animation = true;

        //add the offscren-left class to the onscreen sheep
        sheep[current].classList.add('offscreen-left');

        //remove the onscreen class from the onscreen sheep and the highlighted from the dot
        dots[current].classList.remove('highlighted');
        sheep[current].classList.remove('onscreen');

        //figure out the next Slide
        if (typeof nextSlide == 'undefined') {
            current++;
            if (current >= sheep.length) {
                current = 0;
            }
        } else {
            current = nextSlide;
        }

        //add the onscreen class to the next Slide and the highlighted class to the dot
        dots[current].classList.add('highlighted');
        sheep[current].classList.add('onscreen');
    }

    // fire up moveSlide with a delay of 2s on page load
    timer = setTimeout(moveSlide, 2000);

    // create eventListeners for each dot, test if the right image is already onscreen or an animation is going on, in which case we do nothing. Stop the moveSlides() with clearTimeout and create another loop to get a correct value of i (scope issues), test which dot got clicked on and call moveSlide() again with the new Slide
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function(e) {
            if (e.target.classList.contains('highlighted')) {
                return;
            }
            if (animation) {
                return;
            }
            clearTimeout(timer);
            for (var i = 0; i < dots.length; i++) {
                if (dots[i] == e.target) {
                    nextSlide = i;
                    moveSlide(nextSlide);
                    break;
                }
            }
        });
    }

    //refactored version of the dot functionality
    // [].slice.call(dots).forEach(function(item, index) {
    //     item.addEventListener('click', function(e) {
    //         console.log(index);
    //     });
    // });

    // add functionality to the right arrow, similar to the dots
    for (var j = 0; j < arrows.length; j++) {
        arrows[j].addEventListener('click', function(e) {
            clearTimeout(timer);
            if (animation) {
                return;
            }
            if (e.target.classList.contains('fa-chevron-right')) {
                if (current >= sheep.length) {
                    nextSlide = 0;
                    moveSlide(nextSlide);
                } else {
                    moveSlide(nextSlide);
                }
            }
        });
    }
})();
