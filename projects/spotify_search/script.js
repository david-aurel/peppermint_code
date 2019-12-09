(() => {
    $('#submit-button').on('click', function() {
        var userInput = $('input[name=user-input').val(),
            albumOrArtist = $('select').val(),
            startUrl = 'https://elegant-croissant.glitch.me/spotify',
            imageUrl = 'default.png';

        $.ajax({
            url: startUrl,
            method: 'GET',
            //any sort of data we need to send to the API so we get a response
            data: {
                query: userInput,
                type: albumOrArtist
            },
            success: function(response) {
                //this runs when we get a response from the API
                response = response.artists || response.albums;
                console.log('response: ', response);

                if ($('results-container').length == 0) {
                    if (response.items.length > 0) {
                        $('#results-header').html(
                            'Results for "' + userInput + '"'
                        );
                        $('#more-button').removeClass('invisible');
                    } else {
                        $('#results-header').html('No results');
                    }
                }

                var myHtml = '';

                displayResults(response);
                function displayResults(response) {
                    for (var i = 0; i < response.items.length; i++) {
                        if (response.items[i].images[0]) {
                            imageUrl = response.items[i].images[0].url;
                        }
                        myHtml +=
                            '<div class="result"><a href="' +
                            response.items[i].external_urls.spotify +
                            '".>' +
                            '<img src="' +
                            imageUrl +
                            '">' +
                            '<p>' +
                            response.items[i].name +
                            '</p></a></div>';
                    }
                    $('#results-container').html(myHtml);

                    var nextUrl =
                        response.next &&
                        response.next.replace(
                            'https://api.spotify.com/v1/search',
                            'https://elegant-croissant.glitch.me/spotify'
                        );
                    $('#more-button').on('click', function() {
                        $.ajax({
                            url: nextUrl,
                            method: 'GET',
                            //any sort of data we need to send to the API so we get a response
                            data: {
                                query: userInput,
                                type: $('select').val()
                            },
                            success: function(response) {
                                response = response.artists || response.albums;
                                console.log(response);

                                displayResults(response);
                            }
                        });
                    });
                }
            }
        });
    });
})();
