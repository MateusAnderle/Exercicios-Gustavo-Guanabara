function contar(){
    let res = document.querySelector('#res');
    for(let i = 1; i <= 20; i++) {
        if (i % 2 == 0){
            res.innerHTML += `<p>Contagem de número: <mark>${i}</mark></p>`;
        } else {
            res.innerHTML += `<p>Contagem de número: ${i}</p>`;
        }
    }
}