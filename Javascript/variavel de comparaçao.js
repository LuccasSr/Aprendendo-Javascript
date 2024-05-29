// let valor1 = 5
// let valor2 = 6
// let valor_total = valor1 == valor2 // caso vc queira perguntar se o valor1 e diferente do valor2, usaremos o operador !=, valor1 != valor2
// let resultado = document.querySelector(`div#res`)
// resultado.innerHTML = `O resultado é "${valor_total}"`

// let valor1 = 1
// let valor2 = 2
// let total = (valor1 == valor2)
// let resultado = document.querySelector(`div#res`)
// resultado.innerHTML = `Qual o numero do primeiro valor = ${valor1} e o segundo valor = ${valor2}, o valor 1 e o mesmo do valor 2?. ${total}   `

let valor1 = 5
let valor2 = 6
let comparaçao = (valor1 == valor2)
let resultado = document.querySelector(`div#res`)
resultado.innerHTML = `O valor ${valor1} e o valor ${valor2} sao iguais: ${comparaçao}`