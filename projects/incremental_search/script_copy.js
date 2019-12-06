let searchField = $('input'),
    resultsDiv = $('.results');

// ajax

searchField.on('input', function() {
    function getCountries() {
        // make ajax request to get countries array
        $.ajax({
            url: 'https://flame-egg.glitch.me/',
            data: {
                q: searchField.val()
            },
            success: function(data) {
                let resultsHtml = '',
                    htmlForCountries = '',
                    noResult;

                if (searchField.val() === '') {
                    resultsDiv.html('');
                    return;
                }

                // here we loop trough the countries array and inject it into our html
                for (let i = 0; i < data.length; i++) {
                    noResult = false;
                    resultsHtml += '<p class="country">' + data[i] + '</p>';
                }
                resultsDiv.html(resultsHtml);

                //handling conditions for when to display 'no results'
                if (data.length === 0 && searchField.val() != '') {
                    noResult = true;
                }
                if (noResult) {
                    htmlForCountries += '<p class="no-country">no results</p>';
                    resultsDiv.html(htmlForCountries);
                }

                // if the input didnt match the countries, rerun the ajax request. errors will come up when the user types gibberish, because the countries string can't be sliced, but we ignore them.
                try {
                    let input = searchField.val().toLowerCase(),
                        beginningOfCountry = data[0]
                            .slice(0, input.length)
                            .toLowerCase();
                    if (beginningOfCountry != input) {
                        console.log(
                            'input did not match countries! (already rerun ajax request)'
                        );
                        console.log(beginningOfCountry);
                        console.log(input);

                        getCountries();
                    }
                } catch (err) {
                    return;
                }
            }
        });
    }
    getCountries();
});

// 2. mouseover event
// i.e. hover - add a highlight class to the country we are currently hovering over
// remove highlight class from country we are not hovering over
// look up event delegation!
resultsDiv.on('mouseover', 'p', function() {
    let element = $(this);
    if (element.hasClass('country')) {
        element.addClass('highlighted');
        $('.results p')
            .not(element)
            .removeClass('highlighted');
    }
});

// 3. mousedown event
// take the country the user is clicking on and put it in the input field
// list of countries should go away
resultsDiv.on('mousedown', 'p', function() {
    let element = $(this);
    if (element.hasClass('country')) {
        searchField.val(element.text());
        resultsDiv.html('');
    }
});

// 4. key event
// allow user to scroll through the list using the up and down arrows
// down arrow key - if nothing has the class highlighted alrady, add it to the first. If the last one has it, do nothing (dont increment further). If a country other than the last one has highlighted, remove the class from element that has it and add class to the next element. next and prev jQuery methods could be useful
// up arrow key -
// enter key - we want to put whichever country has the class highlighted on put into the input field
searchField.on('keydown', function(e) {
    //arrow down
    if (resultsDiv.find('p.country').hasClass('country')) {
        if (e.which === 40) {
            if (!resultsDiv.find('p').hasClass('highlighted')) {
                $('.results p')
                    .eq(0)
                    .addClass('highlighted');
            } else if (
                !$('.results p')
                    .last()
                    .hasClass('highlighted')
            ) {
                resultsDiv
                    .find('p.highlighted')
                    .removeClass('highlighted')
                    .next()
                    .addClass('highlighted');
            }
        }
        // arrow up
        if (e.which === 38) {
            if (!resultsDiv.find('p').hasClass('highlighted')) {
                $('.results p')
                    .last()
                    .addClass('highlighted');
            } else if (
                !$('.results p')
                    .eq(0)
                    .hasClass('highlighted')
            ) {
                resultsDiv
                    .find('p.highlighted')
                    .removeClass('highlighted')
                    .prev()
                    .addClass('highlighted');
            }
        }
        // enter
        if (e.which === 13) {
            let highlightedVal = resultsDiv.find('p.highlighted').text();
            searchField.val(highlightedVal);
            resultsDiv.html('');
        }
    }
});

// 5. blur event
// we want to hide the results
// focus event listener, jQuery method hide and show

searchField.on('blur', function() {
    resultsDiv.hide();
});

// 6. focus event
// we want to show the results
searchField.on('focus', function() {
    resultsDiv.show();
});
