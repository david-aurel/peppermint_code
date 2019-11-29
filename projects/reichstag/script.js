var overlay = document.querySelector('.overlay');
var sideNav = document.querySelector('.sidenav');
var toggle = document.querySelector('#menu');
var back = document.querySelector('.back');

toggle.addEventListener('click', function() {
    overlay.classList.add('on');
});

overlay.addEventListener('click', function() {
    overlay.classList.remove('on');
});

back.addEventListener('click', function() {
    overlay.classList.remove('on');
});

sideNav.addEventListener('click', function(e) {
    e.stopPropagation();
});
