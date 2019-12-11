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

    var username = $('input[name="username"]');
    var password = $('input[name="password"]');
    var userToSearch = $('input[name="user-to-search"]');
    var baseUrl = 'https://api.github.com';

    $('button').on('click', function() {
        var repoEndpoint = `/users/${userToSearch.val()}/repos`;
        $.ajax({
            url: baseUrl + repoEndpoint,
            headers: {
                authorization:
                    'Basic ' + btoa(username.val() + ':' + password.val())
            },
            success: function(response) {
                var reposTemplate = Handlebars.templates.repos({
                    data: response
                });
                $('.repos-container').html(reposTemplate);
            }
        });
    });

    $('.repos-container').on('click', '.card', function() {
        var element = $(this);
        var elementId = element.attr('id');
        var contentOfId = $(`#${elementId} .content`);
        var commitEndpoint = `/repos/${userToSearch.val()}/${elementId}/commits`;

        if (contentOfId.length == 0) {
            $.ajax({
                url: baseUrl + commitEndpoint,
                headers: {
                    authorization:
                        'Basic ' + btoa(username.val() + ':' + password.val())
                },
                success: function(response) {
                    response = response.slice(0, 10);

                    var commitsTemplate = Handlebars.templates.commits({
                        data: response
                    });
                    $('#' + elementId).append(commitsTemplate);
                }
            });
        } else {
            if (contentOfId.hasClass('visible')) {
                contentOfId.removeClass('visible');
            } else {
                contentOfId.addClass('visible');
            }
        }
    });
})();
