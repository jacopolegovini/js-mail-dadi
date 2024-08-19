const playerThrowField = document.getElementById('player-throw');
const pcThrowField = document.getElementById('pc-throw');
const diceResultField = document.getElementById('dice-result');

let playerThrowElement = Math.floor((Math.random() * 6) + 1);
let pcThrowElement = Math.floor((Math.random() * 6) + 1);

let result = '';

if (playerThrowElement > pcThrowElement) {
    result = 'Il giocatore ha vinto!'
} else if (playerThrowElement < pcThrowElement) {
    result = 'Il computer ha vinto!'
} else {
    result = 'È un pareggio!'
}

playerThrowField.innerText = playerThrowElement;
pcThrowField.innerText = pcThrowElement;

diceResultField.innerText = result


// ----------------------------------------------------------------

