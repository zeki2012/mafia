let ad = prompt('Adinizi qeyd edin')
function zeki() {
    let kart = Math.floor(Math.random() * 3); 
    let result;

    switch (kart) {
        case 1:
            result = `${ad} Komisarsiniz. Vezifeniz mafyanı tapmaq öldürmək`;
            break;
        case 2:
            result = `${ad} Mafyasiniz. Vezifəniz insanları öldürmək`;
            break;
        default:
            result = `${ad} Vetendassiniz.Vezifeniz mafyanı tapmaq səs vermək`;
            break;
    }

    document.getElementById("mafya").innerHTML = result;
}