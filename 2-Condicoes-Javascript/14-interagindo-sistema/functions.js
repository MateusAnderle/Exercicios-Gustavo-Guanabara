function dataAtualFormatada(){
    let data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'),
        ano  = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function interagir () {
    let res = document.getElementById('res')
    let agora = dataAtualFormatada();
    res.innerHTML = `<p>O que eu recebi do sistema foi ${agora}</p>`
}