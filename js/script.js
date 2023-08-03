var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

buttonTest = document.getElementById('button-rock');

buttonTest = document.getElementById('button-paper');

buttonTest = document.getElementById('button-scissors');

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + 'został kliknięty');

    var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: '+argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier'
    } else if (argMoveId == 3) {
        return 'nożyce'
    } else {
        printMessage('Nie znam ruchu o id' + argMoveId + '.Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult (argPlayerMove, argComputerMove) {
    console.log ('Wywołano funkcjię displayResults z argumentami:' + argPlayerMove + ',' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
        printMessage ('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage ('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!')
    } else if (argPlayerMove == argComputerMove){
        printMessage('Remis');
    } else {
        printMessage ('Przegrywasz :(');
    } 
printMessage('Zagrałem:' + argComputerMove + 'a Ty:' + argPlayerMove );
}

playerMove = argButtonName;
console.log('przypisanie dla ' + playerMove + 'wyboru za pomocą funkcji button')
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wyslosowana liczba to:' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch kompuetra to:' + computerMove);
displayResult(playerMove, computerMove);
}

buttonTest.addEventListener('click',function() {
    buttonClicked('kamień');
});

buttonTest.addEventListener('click',function() {
    buttonClicked('papier');
});

buttonTest.addEventListener('click',function() {
    buttonClicked('nożyce');
});




