let contador = 0;
let res = document.querySelector('section#res');

function contar() {
    contador++
    res.innerHTML = `O contador está com: ${contador} cliques`;
}


function zerar() {
    contador = 0;
    res.innerHTML = null;
}