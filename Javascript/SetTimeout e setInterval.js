// // // // // // // // function iniciar() {
// // // // // // // //   let resultado = document.querySelector(`div#res`);
// // // // // // // //   resultado.innerHTML = `Iniciou a contagem`;

// // // // // // // //   tempo = setTimeout(function () {
// // // // // // // //     resultado.innerHTML = `Executou o setTimeout!`;
// // // // // // // //   }, 5000);
// // // // // // // // }

// // // // // // // // function parar_contagem() {
// // // // // // // //   clearTimeout(tempo);
// // // // // // // //   let resultado = document.querySelector(`div#res`);
// // // // // // // //   resultado.innerHTML = `Parou a contagem`;
// // // // // // // // }

// // // // // // // // // nao estava funcionando porque nao mostrei  onde a msg iria aparecer (let resultado = document.querySelector(`div#res`);) faltou isso

// // // // // // // function iniciar(){
// // // // // // //   let resultado = document.querySelector(`div#res`);
// // // // // // //   resultado.innerHTML = `Iniciando a contagem`;
// // // // // // //   tempo = setTimeout(function(){
// // // // // // //     resultado.innerHTML = `Executou o setTimeout`
// // // // // // //   },5000);
// // // // // // // }

// // // // // // // function parar_contagem(){
// // // // // // //   let resultado = document.querySelector(`div#res`);
// // // // // // //   clearTimeout(tempo);
// // // // // // //   resultado.innerHTML = `Parou a contagem`
// // // // // // // }

// // // // // // function iniciar(){
// // // // // //   let resultado =  document.querySelector(`div#res`);
// // // // // //   resultado.innerHTML = `Iniciando a contagem`

// // // // // //   tempo = setTimeout(function(){
// // // // // //     resultado.innerHTML = `Executou o setTimeout`;

// // // // // //   },5000)
// // // // // // }

// // // // // // function parar_contagem(){
// // // // // //   let resultado = document.querySelector(`div#res`);
// // // // // //   clearTimeout(tempo);
// // // // // //   resultado.innerHTML = `Parou a contagem`
// // // // // //   }

// // // // // // function iniciar(){
// // // // // //   let resultado =  document.querySelector(`div#res`);
// // // // // //   resultado.innerHTML = `Clique para iniciar a contagem`

// // // // // //   setInterval(function(){
// // // // // //     let cronometro = document.querySelector(`div#res`).innerHTML;
// // // // // //     let soma = parseInt(cronometro) + 1;
// // // // // //     document.querySelector(`div#res`).innerHTML = soma;

// // // // // //   },1000);
// // // // // // }

// // // // //  function iniciar() {

// // // // //   contagem = setInterval(function () {
// // // // //      let cronometro = document.querySelector("div#res").innerHTML;
// // // // //     let soma = parseInt(cronometro) + 1;
// // // // //     document.querySelector("div#res").innerHTML = soma;
// // // // //    }, 1000);
// // // // //  }

// // // // //  function parar_contagem() {
// // // // //     clearInterval(contagem)

// // // // //  }

// // // // function iniciar(){
// // // //    let resultado = document.querySelector(`div#res`);
// // // //    resultado.innerHTML = `Iniciando a contagem`

// // // //    tempo = setTimeout(function(){
// // // //       resultado.innerHTML = `Executou o setTimeout`
// // // //    },5000);
// // // // }

// // // // function parar_contagem(){
// // // //    let resultado =  document.querySelector(`div#res`)
// // // //    clearTimeout(tempo);
// // // //    resultado.innerHTML = `Parou a funçao`
// // // // }

// // // function iniciar() {

// // //   tempo = setInterval(function () {
// // //     let cronometro = document.querySelector(`div#res`).innerHTML;
// // //     let soma = parseInt(cronometro) + 1;
// // //     let resultado = document.querySelector(`div#res`);
// // //     resultado.innerHTML = soma;
// // //   }, 1000);
// // // }

// // // function parar_contagem(){
// // //    clearInterval(tempo)
// // // }

// // function iniciar() {
// //   tempo = setInterval(function () {
// //     let cronometro = document.querySelector(`div#res`).innerHTML;
// //     let soma = parseInt(cronometro) - 1;

// //     if (soma === 0) {
// //       let resultado = document.querySelector(`div#res`);
// //       resultado.innerHTML = `Tempo esgotado`;
// //       parar_contagem();
// //     } else {
// //       let resultado = document.querySelector(`div#res`);
// //       resultado.innerHTML = soma;
// //     }

// //   }, 1000);
// // }

// // function parar_contagem() {
// //   clearInterval(tempo);
// // }

// // function iniciar(){
// //    let resultado =  document.querySelector(`div#res`);
// //    resultado.innerHTML = `Iniciando a function`

// //    tempo = setTimeout(function(){
// //       let resultado = document.querySelector(`div#res`)
// //       resultado.innerHTML = `Executou o setTimeout`

// //    },5000);
// // }

// // function parar_contagem(){
// //    clearTimeout(tempo)
// //    let resultado =  document.querySelector(`div#res`)
// //    resultado.innerHTML = `Parou o setTimeout`
// // }

// function iniciar(){

//    tempo = setInterval(function(){
//       let cronometro = document.querySelector(`div#res`).innerHTML;
//       let soma = parseInt(cronometro) - 1;
// if(soma === 0){
//    let resultado = document.querySelector(`div#res`)
//       resultado.innerHTML = `Tempo esgotado`
//       parar_contagem()
// }
// else{
//    let resultado = document.querySelector(`div#res`)
//    resultado.innerHTML = soma

// }

//    },1000);

// }

// function parar_contagem(){
//    clearInterval(tempo)
// }

// function iniciar(){
//    let resultado = document.querySelector(`div#res`)
//    resultado.innerHTML = `Iniciando o setTimeout`

//    tempo = setTimeout(function(){
//     let resultado = document.querySelector(`div#res`)
//     resultado.innerHTML = `Executou o setTimeout`
//    },5000);
// }

// function parar_contagem(){
//    clearTimeout(tempo)
//    let resultado = document.querySelector(`div#res`)
//    resultado.innerHTML = `Parou o setTimeout`
// }

function iniciar() {
  tempo = setInterval(function () {
    let cronometro = document.querySelector(`div#res`).innerHTML;
    let soma = parseInt(cronometro) - 1;

    if(soma === 0){
      let resultado =  document.querySelector(`div#res`)
      resultado.innerHTML = `Tempo esgotado`
      parar_contagem()
    }

    else{
       let resultado = document.querySelector(`div#res`);
       resultado.innerHTML = soma;

    }
  },1000);
}

function parar_contagem(){
   clearInterval(tempo)
}
