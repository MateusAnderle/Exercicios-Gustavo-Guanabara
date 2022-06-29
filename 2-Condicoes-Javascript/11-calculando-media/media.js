function calcular(){
    let nomeAluno = window.prompt('Digite o nome do aluno:');
    let n1 = Number(window.prompt(`Digite a primeira nota de ${nomeAluno}`));
    let n2 = Number(window.prompt(`Digite a segunda nota de ${nomeAluno}`));
    let n3 = Number(window.prompt(`Digite a terceira nota de ${nomeAluno}`));
    let med = (n1 + n2 + n3) / 3;

    let msg = '';
    if (med >= 6) {
        msg = 'Aprovado';
    } else {
        msg = 'Reprovado';
    }

    let res = document.querySelector('section#res');
    res.innerHTML = `<p>As notas de ${nomeAluno} foram: ${n1}, ${n2} e ${n3}</p>`;
    res.innerHTML += `<p>Sua média final foi: ${med}</p>`;
    res.innerHTML += `<p>O resultado final do ano letivo foi: ${msg}</p>`;
}