var quantidade_de_numeros = parseInt(prompt("Digite a quantidade de números:"));
var numeros = [];

for (var i = 0; i < quantidade_de_numeros; i++) {
    var numero = parseFloat(prompt(`Digite o ${i+1}º número:`));
    numeros.push(numero);
}

var menor = numeros[0];
var maior = numeros[0];
var soma = numeros[0];

for (var i = 1; i < quantidade_de_numeros; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    soma += numeros[i];
}

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);