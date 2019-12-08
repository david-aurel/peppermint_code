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
    function keydownEvents() {
        $(document).on('keydown', function(e) {
            // if no hole has it, add selected class to first hole
            if (!holes.is('.select')) {
                if (e.which === 39) {
                    col.eq(0)
                        .children()
                        .children()
                        .not('.player1')
                        .not('.player2')
                        .last()
                        .addClass('select');
                }
                if (e.which === 37) {
                    col.last()
                        .children()
                        .children()
                        .not('.player1')
                        .not('.player2')
                        .last()
                        .addClass('select');
                }
            } else {
                if (e.which === 39) {
                    $('.select')
                        .removeClass('select')
                        .parent()
                        .parent()
                        .next()
                        .children()
                        .children()
                        .not('.player1')
                        .not('.player2')
                        .last()
                        .addClass('select');
                }
                if (e.which === 37) {
                    $('.select')
                        .removeClass('select')
                        .parent()
                        .parent()
                        .prev()
                        .children()
                        .children()
                        .not('.player1')
                        .not('.player2')
                        .last()
                        .addClass('select');
                }
            }
            if (e.which === 13) {
                gameMove(e, 'enter');
            }
        });
    }
    keydownEvents();
    function select() {
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
    }
    select();

    // reset button listener
    resetButton.on('click', function() {
        reset();
    });

    // main game function
    function gameMove(e, enter) {
        var col;
        if (!enter) {
            col = $(e.currentTarget);
        } else {
            col = $('.select')
                .parent()
                .parent();
        }

        var slotsInCol = col.children(),
            holesInCol = slotsInCol.children();

        for (var i = holesInCol.length - 1; i >= 0; i--) {
            if (
                !holesInCol.eq(i).hasClass('player1') &&
                !holesInCol.eq(i).hasClass('player2')
            ) {
                holesInCol.eq(i).addClass(currentPlayer);
                holesInCol.eq(i).removeClass('select');
                holesInCol
                    .eq(i)
                    .parent()
                    .prev()
                    .children()
                    .addClass('select');
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
        } else if (holes.not('.player1').not('.player2').length === 0) {
            victory.html('tie!');
            // resetButton.css({ visibility: 'visible' });
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
                        item.addClass('win');
                    });
                    $('.player1:not(.win').addClass('lose');
                    $('.player2:not(.win').addClass('lose');
                    $('.column').off('click');
                    // $(document).off('keydown');
                    // resetButton.css({ visibility: 'visible' });
                    holes
                        .not('.player1')
                        .not('.player2')
                        .css({ opacity: 0.3 });
                    col.off();
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
                        item.classList.add('win');
                    });
                    $('.player1:not(.win').addClass('lose');
                    $('.player2:not(.win').addClass('lose');
                    $('.column').off();

                    holes
                        .not('.player1')
                        .not('.player2')
                        .css({ opacity: 0.3 });
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
            $('#player1').css({ opacity: 0.3 });
            $('#player2').css({ opacity: 1 });
        } else {
            currentPlayer = 'player1';
            $('#player2').css({ opacity: 0.3 });
            $('#player1').css({ opacity: 1 });
        }
    }

    // reset function
    function reset() {
        for (var i = 0; i < holes.length; i++) {
            holes.css({ opacity: 1 });
            holes.eq(i).removeClass('player1 player2 win lose');
        }
        holes.removeClass('select');
        // resetButton.css({ visibility: 'hidden' });
        if (!victory.html('')) {
            victory.html('');
        }
        $('.column').off();
        $('.column').on('click', function(e) {
            gameMove(e);
        });
        $(document).off('keydown');
        keydownEvents();
        select();
    }

    // toggle stylesheets
    $(document).on('keydown', function(e) {
        if (e.which == 78) {
            if ($('#toggleStylesheet').attr('href') == 'light.css') {
                $('#toggleStylesheet').attr('href', 'dark.css');
            } else {
                $('#toggleStylesheet').attr('href', 'light.css');
            }
        }
    });
})();
