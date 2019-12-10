(() => {
    var imageUrl = 'default.png',
        input = $('input[name=user-input'),
        select = $('select'),
        nextUrl = '',
        myHtml = '';

    $('#submit-button').on('click', function() {
        var url = 'https://elegant-croissant.glitch.me/spotify';

        $.ajax({
            url: url,
            data: {
                query: input.val(),
                type: select.val()
            },

            success: function(data) {
                data = data.artists || data.albums;
                setNextUrl(data.next);
                console.log('response: ', data);

                if ($('results-container').length == 0) {
                    if (data.items.length > 0) {
                        $('#results-header').html(
                            'Results for "' + input.val() + '"'
                        );
                        $('#more-button').removeClass('invisible');
                    } else {
                        $('#results-header').html('No results');
                    }
                }
                getResultsHtml(data);
            }
        });
    });

    $(document).on('click', '#more-button', function() {
        $.ajax({
            url: nextUrl,
            success: function(data) {
                data = data.artists || data.albums;
                setNextUrl(data.next);
                console.log(data);
                getResultsHtml(data);
            }
        });
    });

    function setNextUrl(next) {
        nextUrl =
            next &&
            next.replace(
                'https://api.spotify.com/v1/search',
                'https://elegant-croissant.glitch.me/spotify'
            );
    }

    function getResultsHtml(data) {
        for (var i = 0; i < data.items.length; i++) {
            if (data.items[i].images[0]) {
                imageUrl = data.items[i].images[0].url;
            }
            myHtml +=
                '<div class="result"><a href="' +
                data.items[i].external_urls.spotify +
                '".>' +
                '<img src="' +
                imageUrl +
                '">' +
                '<p>' +
                data.items[i].name +
                '</p></a></div>';
        }
        $('#results-container').append(myHtml);
    }
})();
