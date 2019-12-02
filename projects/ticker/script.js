(() => {
    // var headlines = document.querySelector('.headlines'),
    //     links = headlines.getElementsByTagName('a'),
    //     left = headlines.offsetLeft,
    //     ticker = document.querySelector('.ticker'),
    //     ticker2 = document.querySelector('.ticker2');

    // var headlines2 = document.querySelector('.headlines2'),
    //     links2 = headlines2.getElementsByTagName('a'),
    //     right = headlines2.offsetLeft + headlines2.offsetWidth;

    // var speed = 2,
    //     myReq,
    //     myReq2;

    var headlines = $('.headlines'),
        headlines2 = $('.headlines2'),
        links = $('a'),
        links2 = $('.headlines2 a'),
        left = headlines.offset().left,
        right = headlines.offset().left + headlines.outerWidth(),
        ticker = $('.ticker'),
        ticker2 = $('.ticker2'),
        speed = 4,
        myReq,
        myReq2;

    // ticker 1
    // function moveHeadlines() {
    //     left -= speed;
    //     //if the first link is offscreen
    //     if (left <= -links[0].offsetWidth) {
    //         //add to left the width of the currently first link
    //         left += links[0].offsetWidth + 25;
    //         //make the first link the last link
    //         headlines.appendChild(links[0]);
    //     }
    //     //move the headlines over
    //     headlines.style.left = left + 'px';
    //     myReq = requestAnimationFrame(moveHeadlines);
    // }

    // moveHeadlines();

    function moveHeadlines() {
        left -= speed;
        //if the first link is offscreen
        if (left < -links.eq(0).width()) {
            //add to left the width of the currently first link
            left += links.eq(0).width() + 25;
            //make the first link the last link
            headlines.append(links.eq(0));
        }
        //move the headlines over
        headlines.css({
            left: left + 'px'
        });
        myReq = requestAnimationFrame(moveHeadlines);
    }

    moveHeadlines();

    // //ticker2
    // function moveHeadlines2() {
    //     right -= speed;
    //     // if last link is offscreen
    //     if (right < -links2.eq([links.length - 1]).outerWidth() - 20) {
    //         //add to left the width of the currently first link
    //         right += links2.eq([links.length - 1]).outerWidth() + 25;
    //         // //make the last link the first link
    //         headlines2.prepend(links2.eq([links.length - 1]));
    //     }
    //     //move the headlines over
    //     headlines2.css({
    //         right: right + 'px'
    //     });
    //     myReq2 = requestAnimationFrame(moveHeadlines2);
    // }

    // moveHeadlines2();

    //     //stop animation
    //     ticker.addEventListener('mouseenter', function() {
    //         cancelAnimationFrame(myReq);
    //     });

    //     //start animation
    //     ticker.addEventListener('mouseleave', function() {
    //         myReq = requestAnimationFrame(moveHeadlines);
    //     });

    //stop animation
    // ticker.on('mouseenter', function(e) {
    //     cancelAnimationFrame(myReq);
    //     ticker.off('mouseleave', function() {
    //         myReq = requestAnimationFrame(moveHeadlines);
    //     });
    // });

    // start animation

    //     //stop animation ticker 2
    //     ticker2.addEventListener('mouseenter', function() {
    //         cancelAnimationFrame(myReq2);
    //     });

    //     //start animation ticker2
    //     ticker2.addEventListener('mouseleave', function() {
    //         myReq2 = requestAnimationFrame(moveHeadlines2);
    //     });
})();

// var headlines = document.getElementsById('headlines');
// var headlines = $('#headlines');

// var left = headlines.offsetLeft;
// var left = headlines.offset().left;

// var a = document.getElementsByTagName('a');
// left < -a[0].offsetWidth;

// var a = $('a');
// left < -a.eq(0).outerWidth();
