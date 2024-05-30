// const pessoa = [`Lucas`, `Silva`, `30`, `Brasileiro`]
// pessoa.push(`Solteiro`, `Timido`)

// console.log(`${pessoa}` )


 let numeromax = document.querySelector(`p#texto1`)
const lista1 = ["arroz", "feijao", "açucar","ovo"]
lista1.push("peixe") // para adicionar no final da array
lista1.pop() // para apagar no final da array
lista1.shift() // para apagar no onicio da array
lista1.unshift("Mortadela") // para adicionar no inicio da array

const lista2 = ["milho", "sal", "cha","salcicha"]

const jogadores = ["marinho", "pelé", "robinho","maradona","lucas","bebeto"]
const craques = jogadores.slice(2, 4) // usado para mostrar so o que voce desejar da array


const numeros = [1, 20, 5, 60, 100, 8, 2, 0]


const maior5 = numeros.filter(filtragem)


//numeros.sort()
// no caso de numeros para organizar em ordem quem que fazer essa function de comparaçao, porque o atributo -sort()- ele se trata de string, se eu faço,
//numeros.sort() =  ele ira organizar 1, 100 2, 20 .... porque para o -sort()- 1 e o 100 e da mesma familia porque começam, com o numero 0
numeros.sort(function(a,b) {return a-b}) 

jogadores.sort() // usamos para mostrar em ordem alfabetica // obs: So ira monstra certinho se todos os nomes, estiverem iguais. ex: todas as strings em minusculo ou em maiusculas, tanto a frase toda quanto so a primeira letra.
//jogadores.reverse() // usamos para mostrar a ordem alfabetica,porem ao contrario. para que isso funcione, voce tera que primeiro criar o -sort()- so depois voce conseguira criar o -reverse()-
const lista3 = lista1.concat(lista2) // para concatenar um array com outra
//console.log(`${lista3}`)
//console.log(lista3[0]) // para mostrar um item especifico na array
//console.log(lista3.length) // para mostrar quantos item tem na array
//console.log(`${craques}`)

// para encontrar o maior numero em um array, usamos uma funçao como no exemplo abaixo:
function maior_numero(array){
    return Math.max.apply(null, array);
}


// para encontrar o menor numero
function menor_numero(array){
    return Math.min.apply(null, array)
}

// para poder filtrar numeros especificos, selecinado e maior que:
function filtragem(value, index, array){
    return value >5
}

numeromax.innerHTML = maior5
//console.log(`${numeros}`)



