let numerosRecebidos = [];
let res = document.querySelector('#res');

function limpar(){
    numerosRecebidos = [];
    res.innerHTML = null;
}

function add(){
    let num = Number(document.getElementById('maiorvalor').value);
    document.getElementById('maiorvalor').value = '';
    numerosRecebidos.push(num)
    res.innerHTML += `<p>Número ${num} recebido!</p>`;
    return numerosRecebidos;
}

function maior() {
    let max = numerosRecebidos.reduce(function(a, b) {
        return Math.max(a, b);
    });
    res.innerHTML += `O maior número entre os digitados foi: ${max}`;  
}