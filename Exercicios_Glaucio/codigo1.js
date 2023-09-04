let totalPessoas = 10;
let somaAlturaHomens = 0;
let numeroMulheres = 0;

for (let i = 1; i <= totalPessoas; i++) {
  let altura = parseFloat(prompt(`Digite a altura da ${i}ª (em metros): `));
  let genero = prompt(`Digite o gênero da pessoa ${i} (H para homem ou M para mulher): `).toUpperCase();

  // Atualiza a altura da primeira pessoa como a maior e a menor altura
  if (i == 1) {
    maiorAltura = altura;
    menorAltura = altura;
  } else {
    // Encontra a maior e a menor altura nas pessoas subsequentes
    if (altura > maiorAltura) {
      maiorAltura = altura;
    }
    if (altura < menorAltura) {
      menorAltura = altura;
    }
  }

  // Calcule a média de altura dos homens
  if (genero == 'H') {
    somaAlturaHomens += altura;
  } else if (genero == 'M') {
    numeroMulheres++;
  }
}

let mediaAlturaHomens;

// Calcula a média de altura dos homens
if (numeroMulheres != totalPessoas){
    let mediaAlturaHomens = somaAlturaHomens / (totalPessoas - numeroMulheres);
} else {
    let mediaAlturaHomens = 0;
}

// Exibe os resultados
console.log(`Maior altura: ${maiorAltura.toFixed(2)} metros`);
console.log(`Menor altura: ${menorAltura.toFixed(2)} metros`);
console.log(`Média de altura dos homens: ${mediaAlturaHomens.toFixed(2)} metros`);
console.log(`Número de mulheres: ${numeroMulheres}`);
