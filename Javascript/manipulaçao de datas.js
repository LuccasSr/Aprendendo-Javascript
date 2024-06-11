// comando base para pegar a data
let data = new Date()
//console.log(data)

//comando para pegar o ano
let ano = data.getFullYear()
//console.log(ano)

//comando para pegar o mes atual em numerico, obs: no javascript sempre vai pegar de 0 a 11, sendo 0 janeiro e 11 dezembro
let mes = data.getMonth()
//console.log(mes) para mostrar os meses por escrito sera necessario criar um array

let mesesdoano = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let mesesescrito = mesesdoano[data.getMonth()]
console.log(mesesescrito)

// pegar o dia do mes
let diames =  data.getDate()
//console.log(diames)
  
// pegar dia da semana
let diasemana = data.getDay()
//console.log(diasemana) // lembrando que começa de 0 a 6, entao 0 é a posiçao do domingo da semana, 1 segunda e assim por diante, para fazermos por escrito teremos que fazer uma array igual no exemplo do mes


//pegar as horas 
let horas = data.getHours()
//console.log(horas)

//pegar os minutos
let minutos =  data.getMinutes()
//console.log(minutos) 

// pegar segundos
let seconds = data.getSeconds()
//console.log(seconds)

// pegar millisegundos
let millisegundos = data.getMilliseconds()
//console.log(millisegundos)

// pegar a data no padrao brasileiro, caso voce queira pegar so a data br, vamos usar dateStyle: "short", entre chaves e dentro do modulo data.toLocaleString(), para pegar so a hora mudamos a dateStyle por timeStyle
let br = data.toLocaleString("pt-br",{dateStyle: "short"})
//console.log(br)

// pegar valores separados
// d = new Date()
// dia = d.getDate()
// mes = d.getMonth() +1
// ano = d.getFullYear()

// // para adicionar os zeros antes dos numeros, vamos ter criar uma funçao especifica
// function addzero(x){return x<10? "0" + x : "" + X;};

// let datapadraobr = addzero(dia) + "/" + addzero(mes) + "/" + ano
// console.log(datapadraobr)

d = new Date()
dia = d.getDate()
mes = d.getMonth() +1
ano = d.getFullYear()

function addzero(x){return x<10 ? "0" + x : "" + x; }

let datapadraobr =  addzero(dia) + "/" + addzero(mes) + "/" + ano
//console.log(datapadraobr)

// comparar datas
let hoje = new Date()
let vencimento = new Date(2024, 5, 9)

// if(hoje > vencimento){
//     console.log(`Sua fatura esta vencida`)

// }

// else{
//     console.log(`Tudo certo!`)
// }

// diferença de duas datas em dias

// let datainicial = new Date()
// let datafinal =  new Date(2024, 11, 31)

// let diferencatempo = datafinal.getTime() = datainicial.getTime()
// //                                        //  horas    minutos   segundos   milisegundos
// let diferencadias = Math.ceil(diferencatempo / (24 *   60 *    60 *       1000))
// console.log(diferencadias)


let datainicial = new Date()
let datafinal =  new Date(2024, 11, 31)

let diferencatempo = datafinal.getTime() - datainicial.getTime()
//                                        //  horas    minutos   segundos   milisegundos
let diferencadias = Math.ceil(diferencatempo / (24 *   60 *    60 *       1000))
console.log(diferencadias)