var alunos = [
    { nome: "Maria Joaquinha", notas: [8,7.5,9], curso: "Sistemas para Internet"},
    { nome: "João Ricardo", notas: [8,8.5,5], curso: "Direito"},
    { nome: "José Henrique", notas: [4,10,7], curso: "Administração"},
    { nome: "Pedro da Silva", notas: [6,7.6,7.5], curso: "Sistemas para Internet"},
    { nome: "Silvana Morais", notas: [6,7.5,9.5], curso: "Sistemas de Informação"},
    { nome: "Patricia Castro", notas: [1,9,10], curso: "Arquitetura"},
    { nome: "Joana Ribeiro", notas: [8,9,9], curso: "Contabilidade"},
    { nome: "Rafael Rocha", notas: [4,4,9], curso: "Sistemas para Internet"},
    { nome: "Gustavo Henrique", notas: [8,7.5,5], curso: "Sistemas para Internet"}
];

function imprimirAlunosAprovados(alunos) {
    for (var i = 0; i < alunos.length; i++) {
        var aluno = alunos[i];
        var media = calcularMedia(aluno.notas);
        if (media >= 7) {
            document.write("Nome: " + aluno.nome + "<br>");
            document.write("Média Aritmética: " + media.toFixed(2) + "<br>");
            document.write("Curso: " + aluno.curso + "<br><br>");
        }
    }
}

function calcularMedia(notas) {
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}
