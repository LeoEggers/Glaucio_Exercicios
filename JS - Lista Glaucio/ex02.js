//Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de
//números pares e a quantidade de números ímpares.


function rodar() {
    var numeros = []
    for (var c = 0; c < 10; c++){
        var id = "txtn" + (c + 1)
        var n = Number(document.getElementById(id).value);
        numeros.push(n)
        document.write(n)
    }


}
