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
                $('#results-header').html('Results for "' + userInput + '"');
                console.log('response: ', response);
                response = response.artists || response.albums;

                var myHtml = '';
                for (var i = 0; i < response.items.length; i++) {
                    // console.log(response.items[i].name);
                    myHtml += '<div>' + response.items[i].name + '</div>';

                    var imageUrl = 'default.jpg';
                    if (response.items[i].images[0]) {
                        imageUrl = response.items[i].images[0].url;
                    }
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
