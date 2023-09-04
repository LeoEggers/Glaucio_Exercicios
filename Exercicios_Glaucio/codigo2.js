
let nota1;
do {
  nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10): "));
} while (isNaN(nota1) || nota1 < 0 || nota1 > 10);


let nota2;
do {
  nota2 = parseFloat(prompt("Digite a segunda nota (entre 0 e 10): "));
} while (isNaN(nota2) || nota2 < 0 || nota2 > 10);


let nota3;
do {
  nota3 = parseFloat(prompt("Digite a terceira nota (entre 0 e 10): "));
} while (isNaN(nota3) || nota3 < 0 || nota3 > 10);

const peso1 = 2;
const peso2 = 3;
const peso3 = 5;

const somaPesos = peso1 + peso2 + peso3;
const somaNotas = nota1 * peso1 + nota2 * peso2 + nota3 * peso3;
const mediaPonderada = somaNotas / somaPesos;

alert(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);
