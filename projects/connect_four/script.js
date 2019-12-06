(() => {
    var victory = $('.victory h1');
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
            $('.column').unbind();
        } else if (checkForVictory(holesInRow)) {
            //do the victory dance
            victory.html(currentPlayer + ' won (four in a row)');
            $('.column').unbind();
        }

        switchPlayers();
    });

    function checkForVictory(slots) {
        var count = 0;
        //loop through the slots and check how many have the class
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;

                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function switchPlayers() {
        if (currentPlayer == 'player1') {
            currentPlayer = 'player2';
        } else {
            currentPlayer = 'player1';
        }
    }
})();
