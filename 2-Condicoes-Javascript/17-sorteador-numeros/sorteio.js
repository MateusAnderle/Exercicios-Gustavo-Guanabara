function sortear(){
    let aleatorio = Math.random();
    let num = 1 + Math.trunc(500 * aleatorio);
    
    let res = document.querySelector('section#res');
    res.innerHTML += `<p>Acabei de pensar no número ${num}!</p>`;
}

function limpar() {
    let res = document.querySelector('section#res');
    res.innerHTML = null;
    res.innerHTML += `<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 500.</p>`;
}
