
let media = 0
let contador = parseInt(prompt("Digite quantos numeros você vai precisar"))
let userInput

for (i = 1; i <= contador; i++) {
    userInput = Number(prompt(`Digite a entrada número ${i}`))
    media += userInput

}

alert(media / contador)