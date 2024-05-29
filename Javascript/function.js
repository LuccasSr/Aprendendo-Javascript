// // function soma(){
// //     let valor1 = 5
// //     let valor2 = 5
// //     let somar = valor1 + valor2
// //     let resultado = document.querySelector(`div#res`)
// //     resultado.innerHTML = `${somar}`

// //     } 


// //     function clicar(){
// //         alert(`Hello, World!`)
// //     }

// //     function grau(valor_fahrenheit){
// //        return (5/9) * (valor_fahrenheit -32)

// //     }

// //     let graus_celsius = grau(77);
// //     alert(`A temperatura é de ${graus_celsius} graus celsius `)

// function soma(){
//     let valor1 = 2
//     let valor2 = 2
//     let somar = valor1 + valor2
//     alert(`${somar}`)
    
// }

function soma(){
    let valor1 = 5
    let valor2 = 5
    let resultado = document.querySelector(`div#res`)
    let somar = valor1 + valor2
    resultado.innerHTML = `a soma entre os numeros ${valor1} e ${valor2}, é igual a ${somar}`
}


function clicar(){
    let valor1 = prompt(`Digite um numero: `)
    let valor2 = prompt(`Digite outro numero: `)
    let somar = Number(valor1) + Number(valor2)
    alert(`A soma entre o numero ${valor1} + ${valor2} é igual a : ${somar}`)
}

