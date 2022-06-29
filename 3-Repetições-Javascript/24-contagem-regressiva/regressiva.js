function contar(){
    let res = document.querySelector('#res');
    for(let i = 20; i >= 1; i--) {
            res.innerHTML += `<p>Contagem de número: ${i}</p>`;
    }
}