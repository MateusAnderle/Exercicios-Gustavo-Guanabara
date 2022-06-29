function contar() {
    let res = document.querySelector('#res');
    for (let i = 0; i <= 10; i++) {
    res.innerHTML += `<p>Contagem de número: ${i}</p>`;
    }
}