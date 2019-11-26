(() => {
    let headlines = document.querySelector('.headlines'),
        links = headlines.getElementsByTagName('a'),
        left = headlines.offsetLeft,
        ticker = document.querySelector('.ticker');

    let headlines2 = document.querySelector('.headlines2'),
        links2 = headlines2.getElementsByTagName('a'),
        right = headlines2.offsetLeft + headlines2.offsetWidth;

    let speed = 1,
        myReq;

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
        requestAnimationFrame(moveHeadlines2);
    }

    moveHeadlines2();

    //start and stop the animation
    ticker.addEventListener('mouseenter', function() {
        //stop animation
        cancelAnimationFrame(myReq);
        // change the style of the links
        for (var i = 0; links.length; i++) {
            links[i].addEventListener('mouseenter', function(event) {
                event.stopPropagation();
                event.target.style.color = 'blue';
                event.target.style.textDecoration = 'underline';
            });
        }
    });

    ticker.addEventListener('mouseleave', function() {
        //start animation
        myReq = requestAnimationFrame(moveHeadlines);
        //change style of the link back to its original
        for (var i = 0; links.length; i++) {
            event.stopPropagation();
            links[i].addEventListener('mouseleave', function(event) {
                event.target.style.color = 'black';
            });
        }
    });
})();
