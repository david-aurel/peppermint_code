let board = document.getElementById('board'),
    racers = document.getElementsByClassName('racer'),
    boostBtn = document.getElementById('boost-button'),
    leftRacer = [0, 0, 0, 0];

function getRandomNumber() {
    return Math.floor(Math.random() * 51);
}

function getRandomColorNumber() {
    return Math.floor(Math.random() * 255);
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        let r = getRandomColorNumber(),
            g = getRandomColorNumber(),
            b = getRandomColorNumber(),
            randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        board.style.background = randomColor;
    }
});
board.addEventListener('click', function() {
    for (let i = 0; i < leftRacer.length; i++) {
        leftRacer[i] += getRandomNumber();
    }

    for (let i = 0; i < racers.length; i++) {
        racers[i].style.left = leftRacer[i] + 'px';
    }
});

boostBtn.addEventListener('click', function() {
    event.stopPropagation();
    leftRacer[0] += 100;
    racers[0].style.left = leftRacer[0] + 'px';
});
