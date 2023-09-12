var notas = []
for (var c = 0; c < 3; c++){
    do{var nota = prompt(`Digite a ${c+1}ª nota: `).replace(",",".")
        if (!isNaN(nota) && nota >= 0 && nota <= 10){
            nota = parseFloat(nota)
            notas.push(nota)
            break
        } else {
            alert("Tente novamente. Digite uma nota entre 0 e 10.")
        }
    }while (true)
}

var total = 0
for (var nota of notas){
    total += nota
}

var media = total / 3
var situacao
var nota_recuperacao

if (media >= 7){
    situacao = "Aprovado"
} else if (media <= 4){
    situacao = "Reprovado"
}else{
    alert(`Média: ${media.toFixed(2)}\nSituação: Recuperação`)
    do{
        nota_recuperacao = prompt("Digite a nota da recuperação: ").replace(",",".")
        if (!isNaN(nota) && nota >= 0 && nota <= 10){
            nota_recuperacao = parseFloat(nota_recuperacao)
            break
        } else {
            alert("Tente novamente. Digite uma nota entre 0 e 10.")
        }
    }while (true)
    media = (media + nota_recuperacao) / 2
    if (media >= 5){
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    }
}

alert(`A média do aluno é ${media.toFixed(2)}\nSituação: ${situacao}`)
