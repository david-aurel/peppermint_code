(() => {
    var sheep = document.querySelectorAll('#sheep img'),
        current = 0;

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
        //add the onscreen class tothe next sheep
        sheep[current].classList.add('onscreen');

        setTimeout(moveSheep, 3000);
    }

    moveSheep();
})();
