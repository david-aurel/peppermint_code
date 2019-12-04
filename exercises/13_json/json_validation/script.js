let header = $('h1'),
    textarea = $('#textarea'),
    button = $('#button');

// when the button is clicked, do an alert saying whether the textarea input is valid json or not
button.on('click', function() {
    try {
        JSON.parse(textarea.val());
        header.css({
            color: 'lightgreen'
        });
    } catch (err) {
        // alert('invalid JSON 😟');
        header.css({
            color: 'tomato'
        });
    }
});
