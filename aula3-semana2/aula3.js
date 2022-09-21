// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
// normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
// para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento

// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em três vezes, preço normal de etiqueta mais juros de 10%

const precoProduto = parseFloat(prompt('qual o preço do produto?'))
const mensagem = `
informe o método de pagamento: 
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento em cartão
`

const metodoDePagamento = prompt(mensagem)

console.log(precoProduto)
console.log(metodoDePagamento)

if (metodoDePagamento == 1 || metodoDePagamento == 2 ){
    const precoFinal = precoProduto * 0.9
    alert(`o preço final é R$ ${precoFinal}`)
    
} else if (metodoDePagamento == 3){
    const parcelas = parseInt(prompt('quer parcelar em 1, 2 ou 3 vezes?'))

    if(parcelas == 1){
        const precoFinal = precoProduto * 0.85
        alert(`o preço final é R$ ${precoFinal}`)

    } else if (parcelas == 2){
        alert(`o preço final é R$ ${precoProduto}`)
    } else {
        const precoFinal = precoProduto * 1.1
        alert(`o preço final é R$ ${precoFinal}`)
    }
}
