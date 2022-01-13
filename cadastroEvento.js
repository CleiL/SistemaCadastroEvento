// data
let dataHoje = new Date().toDateString()
let dataEvento = new Date("March 13, 2022").toDateString()
console.log(dataHoje)

if (dataEvento < dataHoje){
    console.log("Cadastro permitido!")
} else{
    console.log("Cadastro não permitido, data inferior a do evento")
}

// Idade
let idadeCadastro = 18
if(idadeCadastro >= 18){
    console.log("Maior de 18, cadastro permitido")
} else{
    console.log("Menor que 18 anos, cadastro não permitido")
}

// Participantes
let totaldeParticipantes = 10
console.log("Participantes inscritos até o momento:", totaldeParticipantes)
if(totaldeParticipantes < 100){
    console.log("Listar Participante, cadastro permitido!")
} else {
    console.log("Limite de participantes ultrapassada, cadastro não permitido!")
}

// Palestrantres

let totaldePalestrantes = 500
console.log("Palestrantes inscritos até o momento:", totaldePalestrantes)
if (totaldePalestrantes < 500) {
  console.log("Listar de palestrantes , cadastro permitido!")
} else {
  console.log("Lista de participantes excedida, cadastro não permitido!")
}