let ad = prompt('Adinizi daxil edin:');
let math = Math.floor(Math.random() * 3);
let netice;



if (math == 0) {
    netice = `${ad}, sen Mafiayasan`;
} else if (math == 1) {
    netice = `${ad}, sen Kommisarsan`;
} else if (math == 2) {
    netice = `${ad}, sen Vetendassan`;
} else {
    netice = 'Sehv bas verdi tekrar cehd edin';
};

document.getElementById('mafia').innerHTML = netice