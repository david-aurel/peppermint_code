(() => {
    var sheep = document.querySelectorAll('#sheep img'),
        dots = document.querySelectorAll('.dot'),
        current = 0,
        timer,
        animation;

    // //remove the offscreen-left class from the sheep that has it as soon as the animation is over
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
        //remove the onscreen class from the onscreen sheep
        dots[current].classList.remove('highlighted');
        sheep[current].classList.remove('onscreen');
        //figure out the next sheep
        if (typeof nextSlide == 'undefined') {
            current++;
            if (current >= sheep.length) {
                current = 0;
            }
        } else {
            current = nextSlide;
        }
        //add the onscreen class to the next sheep
        dots[current].classList.add('highlighted');
        sheep[current].classList.add('onscreen');
    }

    // set moveSheep
    timer = setTimeout(moveSlide, 2000);

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
                    var nextSlide = i;
                    console.log(i);
                    moveSlide(nextSlide);
                    break;
                }
            }
        });
    }

    //refactored version
    // [].slice.call(dots).forEach(function(item, index) {
    //     item.addEventListener('click', function(e) {
    //         console.log(index);
    //     });
    // });
})();
