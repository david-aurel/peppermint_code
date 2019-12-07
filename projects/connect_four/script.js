(() => {
    var victory = $('.victory h1'),
        resetButton = $('.reset');
    var currentPlayer = 'player1';
    var holes = $('.hole');

    //column selection for mouse
    $('.column').on('click', function(e) {
        gameMove(e);
    });

    //column selection for keyboard
    $(document).on('keydown', function(e) {
        // if no hole has it, add selected class to first hole, no matter which arrow key
        if (e.which === 39) {
            console.log('right arrow key pressed');
        }
        if (e.which === 37) {
            console.log('left arrow key pressed');
        }
    });

    // main game function
    function gameMove(e) {
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

        // get winning array
        var currentItemCoord = $(e.currentTarget).index() - i;
        var currentItemCoord2 = $(e.currentTarget).index() + i;
        var winArr1 = getWinningArray(currentItemCoord, currentItemCoord2)[0];
        var winArr2 = getWinningArray(currentItemCoord, currentItemCoord2)[1];
        console.log(winArr1);
        console.log(winArr2);
        console.log(holesInRow);
        console.log(holesInCol);

        if (checkForVictory(holesInCol)) {
            //do the victory dance
            victory.html(currentPlayer + ' won (four in a column)');
        } else if (checkForVictory(holesInRow)) {
            //do the victory dance
            victory.html(currentPlayer + ' won (four in a row)');
        } else if (checkForVictory(winArr1)) {
            console.log(currentPlayer + 'won diagonal');
        }

        switchPlayers();
    }

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
                    $('.column').off();
                    resetButton.css({ visibility: 'visible' });
                    return true;
                }
            } else {
                count = 0;
                winningPieces = [];
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
        for (var i = 0; i < holes.length; i++) {
            holes.eq(i).removeClass('player1 player2');
            holes.eq(i).css({ border: 'none' });
        }
        victory.html('');
        resetButton.css({ visibility: 'hidden' });
        $('.column').on('click', function(e) {
            gameMove(e);
        });
    }
    // reset button listener
    resetButton.on('click', function() {
        reset();
    });

    //calculate diagonal winning array
    function getWinningArray(currentItemCoord, currentItemCoord2) {
        //check each item for its coordinates
        var winArr1 = [],
            winArr2 = [];
        for (let i = 0; i < holes.length; i++) {
            let row = holes
                .eq(i)
                .parent()
                .index();
            let col = holes
                .eq(i)
                .parent()
                .parent()
                .index();

            //put all the item with the corresponding coordinates in an array and return it
            if (col - row == currentItemCoord) {
                winArr1.push(holes.eq(i));
            }
            if (col + row == currentItemCoord2) {
                winArr2.push(holes.eq(i));
            }
        }
        // console.log('arr1: ', winArr1);
        // console.log('arr2: ', winArr2);
        return [winArr1, winArr2];
    }
})();
