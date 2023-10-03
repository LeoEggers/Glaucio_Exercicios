var salarioInicial = 1000;
var percentualAumento = 1.5;
var salarioAtual = salarioInicial + (salarioInicial * percentualAumento / 100);

for (c = 1997; c <= 2023; c++) {
    percentualAumento *= 2;
    salarioAtual += (salarioAtual * percentualAumento / 100);
    document.write(`<br>ano: ${c} || Salário: R$${salarioAtual.toFixed(2)} || taxa de aumento: ${percentualAumento}% <br>`);
}

function calcular() {
    var salarioUsuario = parseFloat(document.getElementById("salarioUsuario").value);
    var percentualAumentoUsuario = 1.5;
    for (d = 1997; d <= 2023; d++) {
        percentualAumentoUsuario *= 2;
        salarioUsuario += (salarioUsuario * percentualAumentoUsuario / 100);
        document.write(`<br>ano: ${d} || Salário: R$${salarioUsuario.toFixed(2)} || taxa de aumento: ${percentualAumentoUsuario}% <br>`);
    }
}