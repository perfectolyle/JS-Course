let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

function autoMove(){
    const moves = ['Rock', 'Paper', 'Scissors'];
    const playerMove = moves[Math.floor(Math.random() * moves.length)];
    return playerMove;
}


let isAutoPlaying = false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = autoMove();
            playGame(playerMove);
            updateScore();
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function updateScore(){
document.querySelector('.js-score').innerHTML = `Score: Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

updateScore();        

function pickComputerMove() {
const randomNunber = Math.random();
let computerMove = '';
let computerMoveIcon = '';
if (randomNunber < 1/3) {
    computerMove = 'Rock';
    computerMoveIcon = '✊';
} else if (randomNunber >= 1/3 && randomNunber < 2/3){
    computerMove = 'Paper';
    computerMoveIcon = '✋';
} else if (randomNunber >= 2/3 && randomNunber < 1) {
    computerMove = 'Scissors';
    computerMoveIcon = '✌️';
}

return { computerMove, computerMoveIcon };
}

function playGame(yourMove) {
const computer = pickComputerMove();
const computerMove = computer.computerMove;
const computerMoveIcon = computer.computerMoveIcon;
let moveIcon = '';
let result = '';
if (yourMove === 'Scissors') {
    moveIcon = '✌️';
    if (computerMove === yourMove) {
        result = 'Tie!';
    } else if (computerMove === 'Rock') {
        result = 'You Lose!';
    } else if (computerMove === 'Paper') {
        result = 'You Win!';
    }
} else if (yourMove === 'Rock'){
    moveIcon = '✊';
    if (computerMove === yourMove){
        result = 'Tie!';
    } else if (computerMove === 'Scissors'){
        result = 'You Win!';
    } else if (computerMove === 'Paper'){
        result = 'You Lose!';
    }
} else if (yourMove === 'Paper'){
    moveIcon = '✋';
    if (computerMove === yourMove){
        result = 'Tie!';
    } else if (computerMove === 'Scissors'){
        result = 'You Lose!';
    } else if (computerMove === 'Rock'){
        result = 'You Win!';
    }
}

if (result === 'You Win!'){
    score.wins += 1;
} else if (result === 'You Lose!'){
    score.losses += 1;
} else if (result === 'Tie!'){
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));


document.querySelector('.js-moves').innerHTML = `You picked ${moveIcon} VS ${computerMoveIcon} Computer picked `;
document.querySelector('.js-result').innerHTML = result;


return {
    yourMove,
    computerMove,
    result
};
}