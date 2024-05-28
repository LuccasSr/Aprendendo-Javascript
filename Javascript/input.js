// function verificar(){
// let numero01 = document.querySelector(`input#numero1`).value
// let numero02 = document.querySelector(`input#numero2`).value
// let resoluçao = document.querySelector(`div#res`)
// let soma = Number(numero01) + Number(numero02)
// resoluçao.innerHTML = `A soma entre os numeros: ${numero01} e ${numero02} <br> é igual a ${soma}`

// }

// function verificar(){
//     let numero01 = document.querySelector(`input#numero1`).value // colocar .value para armazenar esse valor na memoria para poder usar depois
//     let numero02 = document.querySelector(`input#numero2`).value
//     let numero03 = document.querySelector(`input#numero3`).value
//     let resoluçao = document.querySelector(`div#res`)
//     let soma = Number(numero01) + Number(numero02)
//     let soma2 = soma * Number(numero03)
//     resoluçao.innerHTML = `A soma dos numeros ${numero01} + ${numero02} e igual a ${soma} e multiplicado por ${numero03} é igual a ${soma2} `
// }

function verificar() {
  let numero01 = document.querySelector(`input#numero1`).value;
  let numero02 = document.querySelector(`input#numero2`).value;
  let numero03 = document.querySelector(`input#numero3`).value;
  let resultado = document.querySelector(`div#res`);
  let soma = Number(numero01) + Number(numero02)
  let soma2 = soma * Number(numero03)
  resultado.innerHTML = `A soma entre o numero ${numero01} e ${numero02} é igual a ${soma} <br> x ${numero03} =  <br> é igual a ${soma2} `
}
