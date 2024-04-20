let gameTurn = 0;
let currentPlayer;
let board;

// this function will be called whenever the user changes
// the `select` input labeled `please select game mode`
function setGameMode(selectedValue) {
    switch (selectedValue) {
        case 'human-human':
            isPlayerXHuman = true;
            isPlayerYHuman = true;
            break;
        case 'human-ai':
            isPlayerXHuman = true;
            isPlayerYHuman = false;
            break;
        case 'ai-ai':
            isPlayerXHuman = false;
            isPlayerYHuman = false;
    }
    resetBoard();
    setHTMLvisibilityForInputGameMode(false);
    setHTMLvisibilityForInputHumanCoordinates(true);
    setHTMLvisibilityForInputAiCoordinatesInput(false);
    setHTMLvisibilityForButtonLabeledReset(true);
    displayMessage("Player X's turn");
}

// this function is called whenever the user presses the `enter`
// key in the input box labeled `enter coordinates`
// paramerter: input - the content of the input box
function processHumanCoordinate(input) {
    console.log(`'processHumanCoordinate('${input}')`);
    if (gameTurn % 2 === 0) {
        currentPlayer = 'X';
    } else {
        currentPlayer = '0';
    }
    if ( currentPlayer === 'X') {
        displayMessage("Player Y's turn");
    } else if ( currentPlayer === '0') {
        displayMessage("Player X's turn");
    }

    let coordinates = extractCoordinates(input);
    board[coordinates.x][coordinates.y] = currentPlayer;

    const winningPlayer = getWinningPlayer(board);
    if (winningPlayer) {
        displayMessage(`Player ${currentPlayer} has won !`);
    }

    gameTurn += 1;
    displayBoard(board);
    if ( isPlayerYHuman === false) {
    setHTMLvisibilityForInputHumanCoordinates(false);
    setHTMLvisibilityForInputAiCoordinatesInput(true);
    }
     
    // TODO: add a message stating either
    // Player X's turn
    // Player O's turn
    // It's a tie
    // Player X won 
    // Player O won 

    // TODO: add conditions to hide the coordinates screen for 
    // the human player & show for the button to generate AI 
    // coordinates
}

// this function is called whenever the user presses
// the button labeled `Generate AI coordinates`
function processAICoordinate() {
    console.log(`processAICoordinate()`);
    if ( currentPlayer === 'X' ) {
        currentPlayer = '0';
    } else if ( currentPlayer === '0') {
        currentPlayer= 'X';
    }
    board[1][1] = currentPlayer;
    displayBoard(board);

}

// this function is called when the user clicks on 
// the button labeled `Restart Game`
function resetGame() {
    console.log(`resetGame()`);
    resetBoard();
    displayBoard(board);
    setHTMLvisibilityForInputGameMode(true);
    setHTMLvisibilityForInputAiCoordinatesInput(false);
    setHTMLvisibilityForButtonLabeledReset(false);
    setHTMLvisibilityForInputHumanCoordinates(false);
    gameTurn = 0;
    var x = document.getElementById('gameMode');  
    x.value = '';
}

// this function should change from A1..C3 to coordinates
// that are present in the `board` global variable
function extractCoordinates(input) {
    let y = parseInt(input[1], 10) - 1;
    let x = input[0];
    if ( x === 'a') {
        x = 0;
    } else if ( x === 'b') {
        x = 1;
    } else if ( x === 'c') {
        x = 2;
    }
    return {x, y};
    // this is a sample of what should be returned if the
    // the user had typed `A1`
    // you need to add the to also treat other cases (A2..C3)
    //return { x: 0, y: 0};
}

// this function should return `X` or `O` or undefined (carefull it's not a string )
// based on interpreting the values in the board variable
function getWinningPlayer(board) {
    let winningBoard = [ []]
    return undefined;
}