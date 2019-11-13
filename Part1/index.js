// console.log('slsls')

let board = [];
let winner;

function reset () {
    location.reload();
}


function play (clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);
    console.log(clickedElement);
    let boardFull = false;
    if (winner === undefined){
        if (playerSpan.innerText === 'X'){
            playerSpan.innerText = 'O';
            clickedElement.innerText = 'X'
            board[clickedId] = 'X'
        }else {
            playerSpan.innerText = 'X';
            clickedElement.innerText = 'O';
            board[clickedId] = 'O';
        }
    }

    if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]){
        window.alert(`${board[0]} is the winner!`);
        winner = board[0];
        return;
    }
    if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]){
        window.alert(`${board[3]} is the winner!`);
        winner = board[3];
        return;
    }
    if (board[6] !== undefined && board[6] === board[7] && board[7] === board[8]){
        window.alert(`${board[6]} is the winner!`);
        winner = board[6];
        return;
    }
    if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]){
        window.alert(`${board[0]} is the winner!`);
        winner = board[0];
        return;
    }
    if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]){
        window.alert(`${board[1]} is the winner!`);
        winner = board[1];
        return;
    }
    if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]){
        window.alert(`${board[2]} is the winner!`);
        winner = board[2];
        return;
    }
    if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]){
        window.alert(`${board[0]} is the winner!`);
        winner = board[0];
        return;
    }
    if (board[2] !== undefined && board[2] === board[4] && board[2] === board[6]){
        window.alert(`${board[2]} is the winner!`);
        winner = board[2];
        return;
    }
    for (let i = 0; i < board.length; i++){
        if (board[i] === undefined){
            boardFull = false;
        }
        if (board[0] !== undefined && board[1] !== undefined && board[2] !== undefined && 
            board[3] !== undefined && board[4] !== undefined && board[5] !== undefined && 
            board[6] !== undefined && board[7] !== undefined && board[8] !== undefined){
            boardFull = true;
        }
        if (boardFull === true){
            window.alert("Cat's game, there is no winner.");
            location.reload();
            return;
        }
    }
    if (winner === 'X' || winner === 'O'){
        return;
    }
}





