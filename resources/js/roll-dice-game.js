'use strict';

function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.trunc((Math.random() * 6) + 1);
}

function showMessage(value, message) {
    value.innerText = message;
}

const newBtn = document.getElementById('new-game-btn');
const holdBtn = document.getElementById('hold-btn');
const diceBtn = document.getElementById('dice-btn');
const block = document.getElementById('block');

const playerOneScore = document.getElementById('plr-1-score');
const playerOneTotal = document.getElementById('plr-1-total');
const playerOne = document.getElementById('player-one');

const playerTwoScore = document.getElementById('plr-2-score');
const playerTwoTotal = document.getElementById('plr-2-total');
const secondPlayer = document.getElementById('player-two');

const randomDice = document.getElementById('random-dice');
const dices = document.getElementById('dice');


let sum = 0;
let playerTwo = false;
let winner = false;

let playerOneTotalResult = 0;
let playerTwoTotalResult = 0;

diceBtn.addEventListener('click', chekcing);
holdBtn.addEventListener('click', holdHandler);
newBtn.addEventListener('click', newGame);

// ====> ROll THE DICE SECTION::BEGIN
function chekcing() {

    let random = getRandomInt(1, 6);

    if (playerOneTotalResult >= 50) {
        randomDice.innerText = '🥇 Player One won';
        block.classList.remove('translate-y-14');
        winner = true;
    }
    else if (playerTwoTotalResult >= 50) {
        randomDice.innerText = '🥇 Player two won';
        block.classList.remove('translate-y-14');
        winner = true;
    }

    if (playerTwo === true) {
        if (random !== 1) {
            sum += random;
            showMessage(playerTwoScore, sum);
            dices.classList.remove('hidden');
            dices.src = `./../public/img/dice-${random}.png`;
        }
        else {
            sum = 0;
            dices.classList.remove('hidden');
            dices.src = `./../public/img/dice-${random}.png`;
            showMessage(playerTwoScore, 0);
        }
    }
    else {
        if (random !== 1) {
            sum += random;
            showMessage(playerOneScore, sum);
            dices.classList.remove('hidden');
            dices.src = `./../public/img/dice-${random}.png`;
        }
        else {
            sum = 0;
            dices.classList.remove('hidden');
            dices.src = `./../public/img/dice-${random}.png`;
            showMessage(playerOneScore, 0);
        }
    };

}
// ====> ROll THE DICE SECTION::END

// ====> HOLD BUTTON::BEGIN
function holdHandler() {

    console.log('switched');

    if (!winner) dices.classList.add('hidden');

    if (playerTwo === false) {
        playerOneTotalResult += sum;
        sum = 0;
        showMessage(playerOneTotal, playerOneTotalResult);
        showMessage(playerOneScore, 0);
        dices.classList.add('hidden');
        playerOne.classList.remove('glass');
        secondPlayer.classList.add('glass');
        playerTwo = true;
    }
    else if (playerTwo === true) {
        playerTwoTotalResult += sum;
        sum = 0;
        showMessage(playerTwoTotal, playerTwoTotalResult);
        showMessage(playerTwoScore, 0);
        dices.classList.add('hidden');
        playerOne.classList.add('glass');
        secondPlayer.classList.remove('glass');
        playerTwo = false;
    }
}
// ====> HOLD BUTTON::END

// ====> NEW GANE BUTTON::BEGIN
function newGame() {

    console.warn("You have restarted the game");

    block.classList.add('translate-y-14');
    dices.classList.add('hidden');

    showMessage(playerOneTotal, 0);
    showMessage(playerOneScore, 0);
    playerOneTotalResult = 0;

    showMessage(playerTwoTotal, 0);
    showMessage(playerTwoScore, 0);
    playerTwoTotalResult = 0;

    sum = 0;
}
// ====> NEW GANE BUTTON::END
