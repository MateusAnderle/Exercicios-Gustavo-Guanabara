function contagem() {
    let res = document.getElementById('res');
    let num = Number(document.getElementById('fnum').value);
    let nome = String(document.getElementById('userName').value);

    res.innerHTML += `<h2>Olá ${nome}, vamos contar de 0 até ${num}!</h2>`;

    for(let n = 0; n <= num; n++){
        res.innerHTML += `<p>${n}</p>`;
    }
}