function analisar() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb');
    
    let agora = new Date;
    let res = document.getElementById('res');
    let dia = agora.getDate();
    let mes = agora.getMonth();
    let ano = agora.getFullYear();
    let sem = agora.getDay();  
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let seg = agora.getSeconds();
    res.innerHTML = `<p>Dia: ${dia}</p>`;
    res.innerHTML += `<p>Mês: ${meses[mes]}</p>`;
    res.innerHTML += `<p>Ano: ${ano}</p>`;
    res.innerHTML += `<p>Dia da semana: ${semana[sem]}</p>`;
    res.innerHTML += `<p>Hora: ${hora}</p>`;
    res.innerHTML += `<p>Minutos: ${min}</p>`;
    res.innerHTML += `<p>Segundos: ${seg}</p>`;
}