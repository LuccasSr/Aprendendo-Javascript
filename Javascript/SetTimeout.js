// // function iniciar() {
// //   let resultado = document.querySelector(`div#res`);
// //   resultado.innerHTML = `Iniciou a contagem`;

// //   tempo = setTimeout(function () {
// //     resultado.innerHTML = `Executou o setTimeout!`;
// //   }, 5000);
// // }
  
// // function parar_contagem() {
// //   clearTimeout(tempo);
// //   let resultado = document.querySelector(`div#res`);
// //   resultado.innerHTML = `Parou a contagem`;
// // }


// // // nao estava funcionando porque nao mostrei  onde a msg iria aparecer (let resultado = document.querySelector(`div#res`);) faltou isso


// function iniciar(){
//   let resultado = document.querySelector(`div#res`);
//   resultado.innerHTML = `Iniciando a contagem`;
//   tempo = setTimeout(function(){
//     resultado.innerHTML = `Executou o setTimeout`
//   },5000);
// }


// function parar_contagem(){
//   let resultado = document.querySelector(`div#res`);
//   clearTimeout(tempo);
//   resultado.innerHTML = `Parou a contagem`
// }



function iniciar(){
  let resultado =  document.querySelector(`div#res`);
  resultado.innerHTML = `Iniciando a contagem`

  tempo = setTimeout(function(){
    resultado.innerHTML = `Executou o setTimeout`;

  },5000)
}


function parar_contagem(){
  let resultado = document.querySelector(`div#res`);
  clearTimeout(tempo);
  resultado.innerHTML = `Parou a contagem`
  }