// qtd de aluno, 0 a n de alunos
// vereificar se o numero é par:
    //  se par: escrever numero par e escrever o numero
    // se impr: escrever numero impar, e escrever o numero
    //  se for zero, escrever zero.

let numAlunos = 10;

for(let contar = 0; contar < numAlunos; contar++) {
    if (contar == 0) {
        console.log("número é zero")
    } else if(contar % 2 == 0) {
        console.log(`número ${contar} é PAR`)
    } else if (contar % 2 == 1) {
        console.log(`número ${contar} é IMPAR`)
    }
}
