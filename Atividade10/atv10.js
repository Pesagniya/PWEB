function calcularMaior() {
    const numbers = [];
    for (let i = 1; i <= 3; i++) {
        numbers.push(parseFloat(document.getElementById(`num${i}`).value));
    }
    
    alert(Math.max.apply(null, numbers));
}

function ordemCresc() {
    const numbers = [];
    for (let i = 1; i <= 3; i++) {
        numbers.push(parseFloat(document.getElementById(`num${i}`).value));
        //does parseFloat make a difference? It should be comparing Strings without it, but still outputs correctly
    }

    alert(numbers.sort(function(a, b){return a-b}).join('\t'));
}

function verificarPalindromo() {
    const palavra = document.getElementById('palindromo').value.toUpperCase().split('').join('');
    const reversePalavra = palavra.split('').reverse().join(''); 
    if (palavra === reversePalavra) 
        alert("É palíndromo.");
    else
        alert("Não é palíndromo.");
}

function verificarTriangulo() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const c = parseFloat(document.getElementById('num3').value);  

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) 
            alert('É um triângulo equilátero.');
        else if (a === b || a === c || b === c) 
            alert('É um triângulo isósceles.');
        else 
            alert('É um triângulo escaleno.');
    } 
    else 
        alert('Não é possível formar um triângulo.');
}