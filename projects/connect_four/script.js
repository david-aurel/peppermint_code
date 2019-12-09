(() => {
    var resetButton = $('.reset');
    var currentPlayer = 'player1';
    var holes = $('.hole');
    var col = $('.column');
    var victory = false;
    var p1Score = 0;
    var p2Score = 0;

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
            if (e.which == 78) {
                if ($('#toggleStylesheet').attr('href') == 'light.css') {
                    $('#toggleStylesheet').attr('href', 'dark.css');
                } else {
                    $('#toggleStylesheet').attr('href', 'light.css');
                }
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

        if (
            checkForVictory(holesInCol) ||
            checkForVictory(holesInRow) ||
            checkForVictory(winArr1) ||
            checkForVictory(winArr2)
        ) {
            $('.' + currentPlayer + 'Display' + ' p').append(' wins!');
            if (currentPlayer == 'player1') {
                p1Score++;
            } else {
                p2Score++;
            }
            $('.score1').html(p1Score);
            $('.score2').html(p2Score);
        } else if (holes.not('.player1').not('.player2').length === 0) {
            alert('its a tie');
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
                    victory = true;
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
        var winArr1 = $(),
            winArr2 = $();
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
                winArr1 = winArr1.add(holes.eq(i));
            }
            if (col + row == currentItemCoord2) {
                winArr2 = winArr2.add(holes.eq(i));
            }
        }
        return [winArr1, winArr2];
    }

    // switch players function
    function switchPlayers() {
        if (currentPlayer == 'player1') {
            currentPlayer = 'player2';
            if (!victory) {
                $('.player1Display').addClass('inactive');
                $('.player2Display').removeClass('inactive');
            }
        } else {
            currentPlayer = 'player1';
            if (!victory) {
                $('.player2Display').addClass('inactive');
                $('.player1Display').removeClass('inactive');
            }
        }
    }

    // reset function
    function reset() {
        victory = false;
        for (var i = 0; i < holes.length; i++) {
            holes.css({ opacity: 1 });
            holes.eq(i).removeClass('player1 player2 win lose');
        }
        holes.removeClass('select');

        //reset display current player
        $('.player1Display p').html('Player 1');
        $('.player2Display p').html('Player 2');
        $('.inactive').removeClass('inactive');

        $('.column').off();
        $('.column').on('click', function(e) {
            gameMove(e);
        });
        $(document).off('keydown');
        keydownEvents();
        select();
        switchPlayers();
        switchPlayers();
    }
})();
