function calcularMedia() {
    if(confirm("Calcular Média?") == false)
        exit;

    let nome = prompt("Digite o seu nome: ");
    let nota1 = parseFloat(prompt("Digite a nota 1: "));
    let nota2 = parseFloat(prompt("Digite a nota 2: "));
    let nota3 = parseFloat(prompt("Digite a nota 3: "));
    let media = (nota1 + nota2 + nota3) / 3

    alert("A média aritmética de " + nome + " é " + media.toFixed(2));
}
