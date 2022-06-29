let saida = document.querySelector('#saida');

function acao1() {
    saida.innerHTML += `<p>Você clicou no botão Ação 1</p>`;
}

function acao2() {
    saida.innerHTML += `<p>Você clicou no botão Ação 2</p>`;
}

function acao3() {
    saida.innerHTML += `<p>Você clicou no botão Ação 3</p>`;
}

function acao4() {
    saida.innerHTML += `<p>Você clicou no botão Ação 4</p>`;
}

function limpar(){
    saida.innerHTML = null;
}