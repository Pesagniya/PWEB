let idades = [];
let sexos = [];
let opinioes = [];

function enviar() {
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const opiniao = document.getElementById("opiniao").value;

    idades.push(idade);
    sexos.push(sexo);
    opinioes.push(opiniao);
}

function calcularEstatistica() {
    const average = idades.reduce((a, b) => a + b, 0) / idades.length;
    const oldest = Math.max(...idades);
    const youngest = Math.min(...idades);
    const countLow1 = opinioes.filter(opiniao => opiniao==1).length;
    const constHigh34 = opinioes.filter(opiniao => opiniao==4 || opiniao==3).length;
    const percentageHigh = (constHigh34 / opinioes.length) * 100;
    const womanNum = sexos.filter(sexo => sexo=="feminino").length;
    const manNum = sexos.filter(sexo => sexo=="masculino").length;

    document.getElementById("mediaIdade").innerText = average;
    document.getElementById("maisVelha").innerText = oldest;
    document.getElementById("maisNova").innerText = youngest;
    document.getElementById("qtdPessimo").innerText = countLow1;
    document.getElementById("porcentagemHigh").innerText = percentageHigh;
    document.getElementById("numMulher").innerText = womanNum;
    document.getElementById("numHomem").innerText = manNum;
}