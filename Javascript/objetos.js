// // // const carro = {
// // //   Marca: `Fiat`,
// // //   Modelo: `Uno`,
// // //   Ano: `2013`,
// // //   Preco: `20000,0`,

// // //   // criando metodo
// // //   buzina: function () {
// // //     alert(`Biiiiiiiiiiii`);
// // //   },

// // //   completo: function () {
// // //     return `A marca é: ` + this.Marca + `, e o modelo é: ` + this.Modelo;
// // //   },
// // // };

// // // console.log(`${carro.completo()}`);
// // const moveis = {
// // tv: `Samsung`,
// // videogame: `Playstation`,
// // mouse: `Logitech g403`,
// // caixa: `Jbl`,

// // casa: function(){
// //     return `Melhor marca é: ` +this.tv+ `, e o ` +this.mouse+ `, é o melhor mouse`
// // },

// // buzina: function(){
// //     alert(`Biiiiiii`)
// // }

// // }
// // console.log(`${moveis.casa()}`)

// // //moveis.buzina();

// const carro = {
//   marca: `fiat`,
//   modelo: `Uno`,
//   ano: `2013`,
//   preco: `20000.0`,

//   buzina: function () {
//     alert(`Biiiiiiiiii`);
//   },

//   completo: function () {
//     return (
//       `Qual é a marca do carro: ` + this.marca + `, e o modelo? ` + this.modelo
//     );
//   },
// };

// //carro.buzina()
// //console.log(`${carro.marca}`)
// console.log(`${carro.completo()}`);

const carro = {
marca: `Fiat`,
modelo: `Uno`,
ano: `2013`,

marcaEmodelo: function(){
    return `A marca do seu carro é: ` +this.marca+ `, e o modelo é: ` +this.modelo
},
alertar_marca: function(){
    alert(`A marca do carro é: ${carro.marca}` )
},
}
carro.alertar_marca();
//console.log(`${carro.marcaEmodelo()}`)
//console.log(`Qual a marca do carro?: ${carro.marca}`)