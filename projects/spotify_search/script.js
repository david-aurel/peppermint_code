(() => {
    $('#submit-button').on('click', function() {
        var userInput = $('input[name=user-input').val();
        // console.log('user-input: ', userInput);
        var albumOrArtist = $('select').val();
        // console.log('albumOrArtist: ', albumOrArtist);

        $.ajax({
            url: 'https://elegant-croissant.glitch.me/spotify',
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
                if (response.items.length > 0) {
                    $('#results-header').html(
                        'Results for "' + userInput + '"'
                    );
                } else {
                    $('#results-header').html('No results');
                }
                var myHtml = '';
                for (var i = 0; i < response.items.length; i++) {
                    // console.log(response.items[i].name);

                    var imageUrl = 'default.png';
                    if (response.items[i].images[0]) {
                        imageUrl = response.items[i].images[0].url;
                    }
                    myHtml +=
                        '<div class="result"><img src="' +
                        imageUrl +
                        '">' +
                        '<p>' +
                        response.items[i].name +
                        '</p></div>';
                }
                $('#results-container').html(myHtml);

                var nextUrl =
                    response.next &&
                    response.next.replace(
                        'https://api.spotify.com/v1/search',
                        'https://elegant-croissant.glitch.me/spotify'
                    );
            }
        });
    });
})();
