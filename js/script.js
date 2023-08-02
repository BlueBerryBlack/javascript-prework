var computerMove, randomNumber;
randomNumber - Math.floor(Math.random()*3+1);
console.log('wylosowana liczba to:' + randomNumber);
if (randomNumber == '1') {
    computerMove ='kamień';
} else if (randomNumber == '2') {
computerMove = 'papier' ;
} else if (randomNumber == '3') {
    computerMove = 'nożyce' ;
}
printMessage('Mój ruch:' + computerMove);

var playerMove, playerInput;
playerInput - prompt('Wybierz swój ruch! 1:Kamień 2:Papier 3:Nożyce');
console.log('Wpisana odpowiedź to:' +playerInput);
if (playerInput == '1'){
    playerMove='Kamień';
} else if (playerInput == '2'){
    playerMove='Papier';
} else if (playerInput == '3'){
    playerMove='Nożyce';
} else (){
    playerMove='Nieznany ruch';
}
printMessage('Twój ruch:' + playerMove);