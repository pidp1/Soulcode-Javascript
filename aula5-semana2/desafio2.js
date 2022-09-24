const numeros = [23, -55, -16, 02, 05, -2222, 12, 1, -1]
const positivos = []
const negativos = []
for (const num of numeros) {
    if (num > 0) {
      positivos.push(num)
    } else {
      negativos.push(num)
    }
  }

let somaPos = positivos.reduce((somaPos, currentElement) => somaPos + currentElement)
let somaNeg = negativos.reduce((somaNeg, currentElement) => somaNeg + currentElement)

console.log(`são ${positivos} os positivos e sua soma é ${somaPos} `)
console.log(`são ${negativos} os positivos e sua soma é ${somaNeg} `)