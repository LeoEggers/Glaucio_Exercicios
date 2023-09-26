var populaçãoA = 80000
var taxa_crescimentoA = 3
var populaçãoB = 200000
var taxa_crescimentoB = 1.5

document.write(`Ano: 0<br>
População A: ${populaçãoA}<br>
População B: ${populaçãoB}<br><br>`)

for (var ano = 0; populaçãoA < populaçãoB; ano ++){
    populaçãoA += (populaçãoA * taxa_crescimentoA) / 100
    populaçãoB += (populaçãoB * taxa_crescimentoB) / 100
    document.write(`Ano: ${ano + 1}<br>
    População A: ${populaçãoA.toFixed()}<br>
    População B: ${populaçãoB.toFixed()}<br><br>`)
}

document.write("População A > População B<br>")
populaçãoA += (populaçãoA * taxa_crescimentoA) / 100
populaçãoB += (populaçãoB * taxa_crescimentoB) / 100
document.write(`<strong>Ano: ${ano + 1}</strong><br>
População A: ${populaçãoA.toFixed()}<br>
População B: ${populaçãoB.toFixed()}<br><br>`)