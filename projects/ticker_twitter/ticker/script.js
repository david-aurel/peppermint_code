(() => {
    // ajax
    $.ajax({
        url: '/links.json',
        success: function(data) {
            console.log(data);
            let linkHtml = '';
            for (let i = 0; i < data.length; i++) {
                linkHtml +=
                    '<a href="' + data[i].href + '">' + data[i].text + '</a>';
            }
            headlines.html(linkHtml);
            headlines2.html(linkHtml);
        }
    });

    var headlines = $('.headlines'),
        headlines2 = $('.headlines2'),
        left = headlines.offset().left,
        right = headlines.offset().left,
        ticker = $('.ticker'),
        ticker2 = $('.ticker2'),
        speed = 4,
        myReq,
        myReq2;

    function moveHeadlines() {
        var links = $('.headlines a'); //don't know why but if I dont include this inside the function it wont work
        left -= speed;
        //if the first link is offscreen
        if (left < -links.eq(0).width()) {
            //add to left the width of the currently first link
            left += links.eq(0).width() + 20;
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

    //ticker2
    function moveHeadlines2() {
        var links2 = $('.headlines2 a');
        right -= speed;
        // if last link is offscreen
        if (right < -links2.eq([links2.length - 1]).outerWidth() - 20) {
            //add to left the width of the currently first link
            right += links2.eq([links2.length - 1]).outerWidth() + 30;
            // //make the last link the first link
            headlines2.prepend(links2.eq([links2.length - 1]));
        }
        //move the headlines over
        headlines2.css({
            right: right + 'px'
        });
        myReq2 = requestAnimationFrame(moveHeadlines2);
    }

    moveHeadlines2();

    // stop animation
    ticker.on('mouseenter', function() {
        cancelAnimationFrame(myReq);
    });

    // start animation
    ticker.on('mouseleave', function() {
        myReq = requestAnimationFrame(moveHeadlines);
    });

    // stop animation
    ticker2.on('mouseenter', function() {
        cancelAnimationFrame(myReq2);
    });

    // start animation
    ticker2.on('mouseleave', function() {
        myReq2 = requestAnimationFrame(moveHeadlines2);
    });
})();
