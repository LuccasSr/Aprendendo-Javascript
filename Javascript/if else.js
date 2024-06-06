// // function verificar_cor(){
// //     let cor = document.querySelector(`input#texto1`).value
// //     let resultado = document.querySelector(`div#res`)
// //     cor = cor.toLowerCase()

// //     if(cor == `azul`){

// //         document.body.style.backgroundColor = `blue`
// //     }

// //     else if(cor == `amarelo`){
// //         document.body.style.backgroundColor = `yellow`
// //     }

// //     else{
// //         resultado.innerHTML = `Cor não encontrada!`

// //     }
// // }

// function verificar_cor() {
//   let cor = document.querySelector(`input#texto1`).value;
//   let resultado = document.querySelector(`div#res`);
  
//   if (cor == `azul`) {
//     resultado.innerHTML = `Voce escolheu a cor azul`;
//   } else if (cor == `amarelo`) {
//     resultado.innerHTML = `Voce escolheu a cor amarelo`;
//   } else {
//     resultado.innerHTML = `Cor nao encontrada`;
//   }
// }


function verificar_cor(){
    let cor = document.querySelector(`input#texto1`).value  
    let resultado = document.querySelector(`div#res`)
    cor = cor.toLowerCase()

    if(cor == `azul`){
        resultado.innerHTML = `Voce escolheu a cor Azul!`
    }

    else if(cor == `amarelo`){
        resultado.innerHTML = `Voce escolheu a cor amarela! `

    }

    else{
        resultado.innerHTML = `Cor nao encontrada!`
    }

}