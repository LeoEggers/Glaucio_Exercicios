function somar(){
    
 return (arguments[0][0] + arguments[0][1])
}

function somar_varios(numeros) {
    var total = 0;
    for (var numero of numeros) {
        total += numero;
    }
    return total;
}

function somar_varios2(...args){
    var total = 0;
    for (var numero of args) {
        total += numero;
    }
    return total;
}

function somar_n(){
    var soma = 0
    var quantidade = parseInt(prompt("Quantos números?"))
    
    for (var c = 0; c < quantidade; c++){
        var valor = parseInt(prompt("Digite o " + (c + 1) + "º número: "))
        soma += valor
    }
    return soma
}

var quantidade = parseInt(prompt("Quantos números?"))
var numeros = []
for (var c = 0; c < quantidade; c++){
    var valor = parseInt(prompt("Digite o " + (c + 1) + "º número: "))
    numeros.push(valor)
}

var soma1 = somar(numeros);
var soma2 = somar_varios(numeros);
var soma3 = somar_varios2(...numeros); // Usando o operador de propagação para passar elementos do array como argumentos individuais

console.log(`Soma dos dois primeiros números: ${soma1}`);
console.log(soma2);
console.log(soma3);
