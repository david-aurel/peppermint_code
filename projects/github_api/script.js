(() => {
    ///////////// HANDLEBAR  /////////////
    Handlebars.templates = Handlebars.templates || {};
    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );
    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    ///////////// HANDLEBAR  /////////////

    $('button').on('click', function() {
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        var userToSearch = $('input[name="user-to-search"]').val();
        var baseUrl = 'https://api.github.com';
        var endpoint = '/users/' + userToSearch + '/repos';

        $.ajax({
            url: baseUrl + endpoint,
            headers: {
                authorization: 'Basic ' + btoa(username + ':' + password)
            },
            success: function(response) {
                console.log(response);

                var reposTemplate = Handlebars.templates.repos({
                    data: response
                });
                $('.repos-container').html(reposTemplate);
            }
        });
    });
})();
