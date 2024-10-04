
let pessoa = {}

pessoa.nome = prompt("Digite seu nome"),

pessoa.idade = parseInt(prompt("Digite sua idade")),

pessoa.cidade = prompt("Digite sua cidade")

console.table(pessoa);

let pergunta = parseInt(prompt("Qual dado você quer atualizar? Digite 0 para idade e 1 para cidade ou qualquer número para encerrar"))

if(pergunta == 0){
    pessoa.idade = parseInt(prompt("Digite a nova idade"))
    console.table(pessoa)
}
else if(pergunta == 1){
    pessoa.cidade = prompt("Digite a nova cidade")
    console.table(pessoa)
}
else{
    alert("O programa foi encerrado")
}