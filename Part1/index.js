// console.log('slsls')

const board = [];

function play (clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    let winner = 0;
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    }else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board.length);
    if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]){
        window.alert(`${board[0]} is the winner!`);
        winner = board[0];
    }
    if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]){
        window.alert(`${board[3]} is the winner!`);
        winner = board[3];
    }
    if (board[6] !== undefined && board[6] === board[7] && board[7] === board[8]){
        window.alert(`${board[6]} is the winner!`);
        winner = board[6];
    }
    if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]){
        window.alert(`${board[0]} is the winner!`);
        winner = board[0];
    }
    if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]){
        window.alert(`${board[1]} is the winner!`);
        winner = board[1];
    }
    if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]){
        window.alert(`${board[2]} is the winner!`);
        winner = board[2];
    }
    if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]){
        window.alert(`${board[0]} is the winner!`);
        winner = board[0];
    }
    if (board[2] !== undefined && board[2] === board[4] && board[2] === board[6]){
        window.alert(`${board[2]} is the winner!`);
        winner = board[2];
    }
    console.log(winner);
    let boardFull = false;
    for (let i = 0; i <= 8; i++){
        if (board[i] === undefined){
            boardFull = false;
        }
        if (boardFull === true){
            window.alert("Cat's game, there is no winner.");
        }
    }
}



