function tabuada(){
    let num = Number(document.getElementById('numRecebido').value);
    let res = document.getElementById('res');
    res.innerHTML = `<h3>Tabuada de ${num}</h3>`;
    for(let i = 1; i<=10; i++){
       res.innerHTML += `<p>${num} x ${i} = ${num*i}</p>`;
    }
}