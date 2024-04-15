// remove duplication

function calcularMaior() {
    const numbers = [];
    numbers.push(document.getElementById('num1').value);
    numbers.push(document.getElementById('num2').value);
    numbers.push(document.getElementById('num3').value);    
    
    alert(Math.max.apply(null, numbers));
}

function ordemCresc() {
    const numbers = [];
    numbers.push(document.getElementById('num1').value);
    numbers.push(document.getElementById('num2').value);
    numbers.push(document.getElementById('num3').value);  

    alert(numbers.sort(function(a, b){return a-b}));
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
    const a = document.getElementById('num1').value;
    const b = document.getElementById('num2').value;
    const c = document.getElementById('num3').value;  

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