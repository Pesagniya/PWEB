function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function retornarMsg() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const imc = calcularIMC(peso, altura);
    let classification;
    let grade;

    if (imc > 40.0) {
        classification = "Obesidade Grave";
        grade = "III";
    } else if (imc >= 30.0) {
        classification = "Obesidade";
        grade = "II";
    } else if (imc >= 25.0) {
        classification = "Sobrepeso";
        grade = "I";
    } else if (imc >= 18.5) {
        classification = "Normal";
        grade = "0";
    } else {
        classification = "Magreza";
        grade = "0";
    }

    document.getElementById("result").innerText = `IMC = ${imc}, Classificação: ${classification}, Grau = ${grade}`;
}