let textArea = $('#textarea');

textArea.val(localStorage.getItem('textAreaInput'));

textArea.on('input', function() {
    try {
        localStorage.setItem('textAreaInput', textArea.val());
        console.log(localStorage.getItem('textAreaInput'));
    } catch (err) {
        alert(err);
    }
});
