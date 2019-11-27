(() => {
    var sheep = document.querySelectorAll('#sheep img'),
        current = 0;

    function moveSheep() {
        //add the offscren-left class to the onscreen sheep

        //remove the onscreen class tfrom the onscreen sheep

        //figure out the next sheep

        //add the onscreen class tothe next sheep

        setTimeOut(moveSheep, 5000);
    }
})();
