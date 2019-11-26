(() => {
    var headlines = document.querySelector('.headlines'),
        links = headlines.getElementsByTagName('a'),
        left = headlines.offsetLeft,
        ticker = document.querySelector('.ticker'),
        ticker2 = document.querySelector('.ticker2');

    var headlines2 = document.querySelector('.headlines2'),
        links2 = headlines2.getElementsByTagName('a'),
        right = headlines2.offsetLeft + headlines2.offsetWidth;

    var speed = 2,
        myReq,
        myReq2;

    //ticker 1
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
        myReq = requestAnimationFrame(moveHeadlines);
    }

    moveHeadlines();

    //ticker2
    function moveHeadlines2() {
        right -= speed;
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
        myReq2 = requestAnimationFrame(moveHeadlines2);
    }

    moveHeadlines2();

    //stop animation
    ticker.addEventListener('mouseenter', function() {
        cancelAnimationFrame(myReq);
    });

    //start animation
    ticker.addEventListener('mouseleave', function() {
        myReq = requestAnimationFrame(moveHeadlines);
    });

    //stop animation ticker 2
    ticker2.addEventListener('mouseenter', function() {
        cancelAnimationFrame(myReq2);
    });

    //start animation ticker2
    ticker2.addEventListener('mouseleave', function() {
        myReq2 = requestAnimationFrame(moveHeadlines2);
    });
})();
