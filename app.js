let numSort = [];
let numMax = 100;
let numeroS = numRandom();
let tentv =1;

function exTxt(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'Portuguese Male', {rate:1.1});
}
function msgInicial() {
    exTxt('h1', 'Obá obá obá');
    exTxt('p', 'Escolha um número entre 1 e 100.');
}

msgInicial();

function verifChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroS) {
        exTxt('h1', 'Acertou!');
        let plvTentv = tentv > 1 ? 'tentativas' : 'tentativa'
        let msgTentv = `Você descobriu o número secreto com ${tentv} ${plvTentv}!`
        exTxt('p', msgTentv);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroS) {
            exTxt('p', `O número secreto é menor que ${chute}.`);
        } else {
            exTxt('p', `O número secreto é maior que ${chute}.`);
        }
        tentv++
        limpa()
    }
    
}

function numRandom() {
    let numEsc = parseInt(Math.random() * numMax + 1);
    let qtndElem = numSort.length;

    if (qtndElem == 50){
        numSort = [];
    }

    if (numSort.includes(numEsc)) {
        return numRandom
    } else {
        numSort.push(numEsc);
        console.log(numSort);
        return numEsc;
    }
}

function limpa() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJ() {
    numeroS = numRandom();
    limpa();
    tentv = 1;
    msgInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}