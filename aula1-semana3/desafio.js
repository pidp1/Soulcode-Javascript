// Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, marca, uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque. Ao receber essas informações dos produtos, imprima no HTML essas informações de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total).

let produto = [
  {
    nome: "",
    marca: "",
    foto: "",
    preco: 0,
    qtdEstoque: 0,
    
  },
];

for (let i = 0; i < 5; i++) {
  produto.nome = prompt("qual o nome do produto?") ;
  produto.marca = prompt("qual a marca do produto?");
  produto.foto = prompt("qual a foto do produto?");
  produto.preco = Number(prompt("qual o preço do produto?"));
  produto.qtdEstoque = Number(prompt("quantas unidades temos em estoque?"));

  let precoFinal = (produto.preco) * (produto.qtdEstoque)

  document.write(`<p> 
  <img src='${produto.foto}' width= 200 height =200> </img>
  <br>
  Nome: ${produto.nome} ; <br>
  Marca: ${produto.marca} ; <br>
  Preço: ${produto.preco} ; <br>
  Estoque: ${produto.qtdEstoque} <br>
  preço estoque:R$ ${precoFinal} <br>

  `)
}

