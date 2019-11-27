(() => {
    var sheep = document.querySelectorAll('#sheep img'),
        circles = document.querySelectorAll('#circles div'),
        current = 0;

    // //remove the offscreen-left class from the sheep that has it as soon as the animation is over
    document.addEventListener('transitionend', function(e) {
        if (e.target.classList.contains('offscreen-left')) {
            e.target.classList.remove('offscreen-left');
            setTimeout(moveSheep, 1000);
        }
    });

    function moveSheep() {
        //add the offscren-left class to the onscreen sheep
        sheep[current].classList.add('offscreen-left');
        //remove the onscreen class from the onscreen sheep
        sheep[current].classList.remove('onscreen');
        //figure out the next sheep
        current++;
        if (current >= sheep.length) {
            current = 0;
        }
        //add the onscreen class to the next sheep
        sheep[current].classList.add('onscreen');
    }

    moveSheep();

    function fillCircles() {
        circles[current].
    }
})();
