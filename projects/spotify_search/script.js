(function() {
    var nextUrl = '';

    $('#submit-button').on('click', function() {
        $.ajax({
            url: 'https://elegant-croissant.glitch.me/spotify',
            data: {
                query: $('input').val(),
                type: $('select').val()
            },
            success: function(data) {
                data = data.artists || data.albums;

                if (data.items.length > 0) {
                    $('#results-header').html(
                        $('select').val() + 's for "' + $('input').val() + '"'
                    );
                    $('#results-container').html('');
                    $('#more-button').removeClass('invisible');
                } else {
                    $('#results-header').html('No results');
                    $('#more-button').addClass('invisible');
                }

                getResultsHtml(data);
                getNextUrl(data.next);
            }
        });
    });

    $('#more-button').on('click', function() {
        console.log($('input').val(), $('select').val(), nextUrl);

        $.ajax({
            url: nextUrl,
            data: {
                query: $('input').val(),
                type: $('select').val()
            },
            success: function(data) {
                data = data.artists || data.albums;
                console.log('data: ', data);
                getResultsHtml(data);
                getNextUrl(data.next);
            }
        });
    });

    function getResultsHtml(data) {
        var myHtml = '';
        for (var i = 0; i < data.items.length; i++) {
            var imageUrl = 'default.png';
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

    function getNextUrl(next) {
        nextUrl =
            next &&
            next.replace(
                'https://api.spotify.com/v1/search',
                'https://elegant-croissant.glitch.me/spotify'
            );
    }
})();
