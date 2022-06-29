function parimpar() {
    let num = Number(document.getElementById('testeparimpar').value);
    let parOuImpar = '';

    if (num % 2 == 0) {
        parOuImpar = 'O número digitado é par';
    } else {
        parOuImpar = 'O número digitado é ímpar';
    }
    let res = document.querySelector('#res');
    res.innerHTML = `<p>${parOuImpar}</p>`
}