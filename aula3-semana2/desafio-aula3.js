const tipoCombustivel = prompt(
  "qual o tipo de combustivel? A = alcool ou B = gasolina?"
);
const quantCombustivel = prompt("quantos litros deseja colocar?");

if (tipoCombustivel == "A") {
  if (quantCombustivel < 25) {
    const vFinal = (quantCombustivel*2.7) * 0.98;
    alert(`o preço final é R$ ${vFinal}`);
  } else if (quantCombustivel >= 25) {
    const vFinal = (quantCombustivel*2.7)* 0.96;
    alert(`o preço final é R$ ${vFinal}`);
  }
} else if (tipoCombustivel == "B") {
  if (quantCombustivel < 25) {
    const vFinal = (quantCombustivel*1.9) *0.97;
    alert(`o preço final é R$ ${vFinal}`);
  } else if (quantCombustivel >= 25) {
    const vFinal = (quantCombustivel*1.9)* 0.95;
    alert(`o preço final é R$ ${vFinal}`);
  }
}
