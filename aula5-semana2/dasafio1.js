const numeros = [8, 19, 5, 6, 14, 9, 13]
const impar = []
const par = []
for (const num of numeros) {
  if (num % 2 != 0) {
    impar.push(num)
  } else {
    par.push(num)
  }
}
console.log(`temos ${par.length} números pares e são eles ${par}`)
console.log(`temos ${impar.length} números impares e são eles ${impar}`)