function calc(){
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    let res = document.getElementById('res')

    switch (op) {
        case 1: 
            res.innerHTML += `<p>Você escolheu Soma, portanto, o resultado de ${n1} e ${n2} é de: ${n1 + n2}</p>`
            break;
        case 2: 
            res.innerHTML += `<p>Você escolheu Subtração, portanto, o resultado de ${n1} menos ${n2} é de: ${n1 - n2}</p>`
            break;
        case 3: 
            res.innerHTML += `<p>Você escolheu Multiplicação, portanto, o resultado de ${n1} vezes ${n2} é de: ${n1 * n2}</p>`
            break;
        case 4: 
            res.innerHTML += `<p>Você escolheu Divisão, portanto, o resultado de ${n1} dividido ${n2} é de: ${n1 / n2}</p>`
            break;
        default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
            res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`
            break;
    }
}