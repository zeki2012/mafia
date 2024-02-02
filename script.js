function guessNumber() {
    let userInput = document.getElementById("guess").value;
    let randomNumber= Math.floor(Math.random() * 3);
    let player = '';

    if (randomNumber == 0) {
        player = 'mafia';
    } else if (randomNumber == 1) {
        player = 'komisar';
    } else {
        player = 'vetendas';
    }

    if (userInput == player) {
        document.getElementById('netice').innerHTML = `Təbriklər!! Siz ${player}-i tapdiniz`

    } else {
        document.getElementById('netice').innerHTML = `Cox teessuf siz ${player}-i oldurdunuz`
    }  

}