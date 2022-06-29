function fatorial(){
    let fatorial = Number(document.getElementById('numRecebido').value);
    let res = document.getElementById('res');
    let resultadoFatorial = fatorial;
    res.innerHTML += `<h3>Calculando ${fatorial}!</h3>`;
    
    for(let i = 1; i < fatorial; i++){
        resultadoFatorial *= i;
    }

    for(let i = fatorial; i > 0; i--){
        if(i > 1){
            res.innerHTML += `${i} x `;
        } else {
            res.innerHTML += `${i} = `;
        }
    }
    res.innerHTML += `<strong>${resultadoFatorial}</strong>`;
}