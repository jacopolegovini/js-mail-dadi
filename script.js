const playerThrowField = document.getElementById('player-throw');
const pcThrowField = document.getElementById('pc-throw');
const diceResultField = document.getElementById('dice-result');
const buttonThrow = document.getElementById('button-throw');

buttonThrow.addEventListener('click', function(){

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
    
    diceResultField.innerText = result;
})



// ----------------------------------------------------------------


// Dichiarazione variabili e recupero elementi DOM
const mail = document.getElementById('mail');
const logIn = document.getElementById('login-button');
const afterCheck = document.getElementById('after-check');


const authorizedMail = ['jacopolegovini@gmail.com', 'carlopiano@gmail.com', 'tizioacaso@gmail.com', 'altrotizioacaso@gmail.com']
let message = '';


// Fase di input
logIn.addEventListener('click', function(){
    let mailCheck = mail.value.trim();
    
    // Fase di elaborazione
    for (let i = 0; i < authorizedMail.length; i++) {
        if (mailCheck === authorizedMail[i]) {
            message = 'Sei il benvenuto ' + mailCheck;
            afterCheck.innerText = message
            return;
        }
        message = 'Non sei autorizzato ad entrare. Prova con un\'altra mail.'
        afterCheck.innerText = message
    }
})




