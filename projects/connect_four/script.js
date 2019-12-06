(() => {
    var victory = $('.victory h1'),
        resetButton = $('.reset');
    var currentPlayer = 'player1';

    //column selection
    $('.column').on('click', function(e) {
        var col = $(e.currentTarget),
            slotsInCol = col.children(),
            holesInCol = slotsInCol.children();

        for (var i = holesInCol.length - 1; i >= 0; i--) {
            if (
                !holesInCol.eq(i).hasClass('player1') &&
                !holesInCol.eq(i).hasClass('player2')
            ) {
                holesInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        if (i == -1) {
            return;
        }
        var slotsInRow = $('.row' + i),
            holesInRow = slotsInRow.children();

        if (checkForVictory(holesInCol)) {
            //do the victory dance
            victory.html(currentPlayer + ' won (four in a column)');
        } else if (checkForVictory(holesInRow)) {
            //do the victory dance
            victory.html(currentPlayer + ' won (four in a row)');
        }

        switchPlayers();
    });

    // check for Victory function
    function checkForVictory(slots) {
        var count = 0,
            winningPieces = [];
        //loop through the slots and check how many have the class
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                winningPieces.push(slots.eq(i));
                if (count == 4) {
                    winningPieces.forEach(function(item) {
                        item.css({ border: '3px solid goldenrod' });
                    });
                    $('.column').unbind();
                    resetButton.css({ visibility: 'visible' });
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    // switch players function
    function switchPlayers() {
        if (currentPlayer == 'player1') {
            currentPlayer = 'player2';
        } else {
            currentPlayer = 'player1';
        }
    }

    // reset function
    function reset() {
        var holes = $('.board').find('.hole');
        for (var i = 0; i < holes.length; i++) {
            holes.eq(i).removeClass('player1 player2');
        }
        victory.html('');
        resetButton.css({ visibility: 'hidden' });
    }
    // reset button listener
    resetButton.on('click', function() {
        reset();
    });
})();
