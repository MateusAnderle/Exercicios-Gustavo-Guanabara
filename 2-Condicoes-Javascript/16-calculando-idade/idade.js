function calcular() {
    let agora = new Date;
    let ano = agora.getFullYear();
    let nasc = document.getElementById('idadeUser').value;
    let idade = ano - nasc;
    
    let res = document.getElementById('res');
    res.innerHTML = `Quem nasceu em ${nasc} faz ${idade} este ano!`
}


