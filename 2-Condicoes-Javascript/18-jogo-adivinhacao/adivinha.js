let res = document.querySelector('section#res');
let computador = sortear();
let numJogador = 0;

function sortear(){
    let aleatorio = Math.random();
    let computador = 1 + Math.trunc(100 * aleatorio);
    return computador;
}

function jogar() {
    numJogador = Number(window.prompt('Qual é o seu palpite?'))
    if (numJogador < computador) {
        res.innerHTML += `<p>Você falou ${numJogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (numJogador > computador) {
        res.innerHTML += `<p>Você falou ${numJogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (numJogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}