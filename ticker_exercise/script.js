(() => {
    let headlines = document.querySelector('.headlines'),
        links = headlines.getElementsByTagName('a'),
        left = headlines.offsetLeft;
    let headlines2 = document.querySelector('.headlines2'),
        links2 = headlines2.getElementsByTagName('a'),
        right = headlines2.offsetLeft + headlines2.offsetWidth;

    let speed = 2;

    function moveHeadlines() {
        left -= speed;
        //if the first link is offscreen
        if (left <= -links[0].offsetWidth) {
            //add to left the width of the currently first link
            left += links[0].offsetWidth + 25;
            //make the first link the last link
            headlines.appendChild(links[0]);
        }
        //move the headlines over
        headlines.style.left = left + 'px';
        requestAnimationFrame(moveHeadlines);
    }

    moveHeadlines();

    function moveHeadlines2() {
        right -= speed;
        console.log(right);
        // if last link is offscreen
        if (right <= -links2[links.length - 1].offsetWidth - 20) {
            //add to left the width of the currently first link
            right += links2[links.length - 1].offsetWidth + 25;
            // //make the first link the last link
            headlines2.insertBefore(
                links2[links.length - 1],
                headlines2.firstChild
            );
        }
        //move the headlines over
        headlines2.style.right = right + 'px';
        requestAnimationFrame(moveHeadlines2);
    }

    moveHeadlines2();
})();

// right = -2700;

// right = -2200;
