(countries => {
    let searchField = $('input'),
        resultsDiv = $('.results');

    // 1. input event
    // get a list of countries that match the input we get from the user
    // if the user types gibberish, show a message that says 'no results'
    // if the input field is empty, don't show any results
    searchField.on('input', function() {
        let userInput = searchField.val().toLowerCase(),
            results = [],
            htmlForCountries = '',
            noResult;
        for (let i = 0; i < countries.length; i++) {
            noResult = false;
            if (userInput === '') {
                break;
            }
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                results.push(countries[i]);
            }
            if (results.length === 4) {
                break;
            }
            if (results.length === 0) {
                noResult = true;
            }
        }
        for (let j = 0; j < results.length; j++) {
            htmlForCountries += '<p class="country">' + results[j] + '</p>';
        }
        resultsDiv.html(htmlForCountries);

        if (noResult) {
            htmlForCountries += '<p class="no-country">no result</p>';
            resultsDiv.html(htmlForCountries);
        }
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
    resultsDiv.on('click', 'p', function() {
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
})([
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Angola',
    'Anguilla',
    'Antigua',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bonaire (Netherlands Antilles)',
    'Bosnia Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo, The Democratic Republic of',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Curacao (Netherlands Antilles)',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iraq',
    'Ireland (Republic of)',
    'Israel',
    'Italy',
    'Ivory Coast',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kosovo',
    'Kosrae Island',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia (FYROM)',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Moldova',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Ponape',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Rota',
    'Russia',
    'Rwanda',
    'Saba (Netherlands Antilles)',
    'Saipan',
    'Samoa',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'South Africa',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'St. Barthelemy',
    'St. Croix',
    'St. Eustatius (Netherlands Antilles)',
    'St. John',
    'St. Kitts and Nevis',
    'St. Lucia',
    'St. Maarten (Netherlands Antilles)',
    'St. Thomas',
    'St. Vincent and the Grenadines',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Tinian',
    'Togo',
    'Tonga',
    'Tortola',
    'Trinidad and Tobago',
    'Truk',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos',
    'Tuvalu',
    'US Virgin Islands',
    'Uganda',
    'Ukraine',
    'Union Island',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Virgin Gorda',
    'Wallis and Futuna',
    'Yap',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]);
