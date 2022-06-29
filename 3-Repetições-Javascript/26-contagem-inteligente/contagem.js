function contagem() {
    let res = document.getElementById('res');
    let n1 = Number(document.getElementById('contInicial').value);
    let n2 = Number(document.getElementById('contFinal').value);

    if(n1 < n2) {
        res.innerHTML = `<p>Vamos contar de ${n1} até ${n2}!</p>`;
        while (n1 <= n2) {
            res.innerHTML += `${n1} &#x1F525 `;
            n1++
        }
        res.innerHTML += `Fim!`;
    } else if (n1 > n2){
        res.innerHTML = `<p>Vamos contar de ${n1} até ${n2}!</p>`;
        while (n1 >= n2) {
            res.innerHTML += `${n1} &#x1F525 `;
            n1--
        }
        res.innerHTML += `Fim!`;
    } else {
        res.innerHTML = `<p>Não é possível contar pois os número são iguais!</p>`;
    }
}