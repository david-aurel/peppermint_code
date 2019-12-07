(() => {
    var victory = $('.victory h1'),
        resetButton = $('.reset');
    var currentPlayer = 'player1';
    var holes = $('.hole');
    var col = $('.column');

    //column selection for mouse
    col.on('click', function(e) {
        gameMove(e);
    });

    //column selection for keyboard
    $(document).on('keydown', function(e) {
        // if no hole has it, add selected class to first hole
        if (!col.hasClass('select')) {
            if (e.which === 39) {
                col.eq(0).addClass('select');
            }
            if (e.which === 37) {
                col.last().addClass('select');
            }
        } else {
            if (!col.last().hasClass('select'))
                if (e.which === 39) {
                    $('.select')
                        .removeClass('select')
                        .next()
                        .addClass('select');
                }
            if (!col.eq(0).hasClass('select'))
                if (e.which === 37) {
                    $('.select')
                        .removeClass('select')
                        .prev()
                        .addClass('select');
                }
        }
        if (e.which === 13) {
            gameMove(e, 'enter');
        }
    });

    //select for mouse
    // $('.board').on('mouseover', '.column', function() {
    //     var element = $(this);
    //     element.addClass('select');
    //     col.not(element).removeClass('select');
    //     element
    //         .children()
    //         .children()
    //         .not('.player1, .player2')
    //         .last()
    //         .addClass('select');
    //     // $('.select').hover(function() {
    //     //     console.log('fire');
    //     //     $('.select .hole')
    //     //         .not('.player1, .player2')
    //     //         .last()
    //     //         .toggleClass('selectHole');
    //     // });
    // });
    col.on('mouseenter click', function() {
        var element = $(this),
            currentHolesArr = element
                .children()
                .children()
                .not('.player1')
                .not('.player2')
                .last();

        setTimeout(function() {
            currentHolesArr.addClass('select');
        }, 1);
    });
    col.on('mouseleave click', function() {
        var element = $(this),
            currentHolesArr = element.children().children();

        currentHolesArr.removeClass('select');
    });

    // main game function
    function gameMove(e, enter) {
        var col;
        if (!enter) {
            col = $(e.currentTarget);
        } else {
            col = $('.select');
        }

        var slotsInCol = col.children(),
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

        if (checkForVictory(holesInCol)) {
            //do the victory dance
            victory.html(currentPlayer + ' won (four in a column)');
        } else if (checkForVictory(holesInRow)) {
            //do the victory dance
            victory.html(currentPlayer + ' won (four in a row)');
        } else if (
            checkForDiagonalVictory(winArr1) ||
            checkForDiagonalVictory(winArr2)
        ) {
            victory.html(currentPlayer + ' won (diagonal)');
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
                winArr1.push(holes[i]);
            }
            if (col + row == currentItemCoord2) {
                winArr2.push(holes[i]);
            }
        }
        return [winArr1, winArr2];
    }
    //check for diagnoal victory
    function checkForDiagonalVictory(slots) {
        var count = 0,
            winningPieces = [];
        //loop through the slots and check how many have the class
        for (var i = 0; i < slots.length; i++) {
            if (slots[i].classList.contains(currentPlayer)) {
                count++;
                winningPieces.push(slots[i]);
                if (count == 4) {
                    winningPieces.forEach(function(item) {
                        item.style.border = '3px solid goldenrod';
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
        holes.removeClass('select');
        resetButton.css({ visibility: 'hidden' });
        $('.column').on('click', function(e) {
            gameMove(e);
        });
    }
    // reset button listener
    resetButton.on('click', function() {
        reset();
    });
})();
