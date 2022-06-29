function estacoes(){

    let mes = window.prompt('Digite o mês por extenso (ex: Setembro)')
    let res = document.querySelector('section#res')
    let estacao = '';

    switch (mes.toUpperCase()) { 
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'INVERNO'
            break 
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    if (estacao == 'INDEFINIDA') {
        res.innerHTML = `<p>Mês inválido</p>`
    } else {
    res.innerHTML = `<p>No mês de ${mes}, estamos na estação <strong>${estacao}</strong>.</p>`
    }
}
