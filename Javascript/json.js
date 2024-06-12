// O Json serve para transformar strings em objetos, e objetos em strings.

const carro = {
  modelo: "Uno",
  marca: "Fiat",
  ano: "2001",
  motor: [1.6, 1.4, 1.0],
};

// Converteu para texto Json
let texto = JSON.stringify(carro);
//console.log(texto)

// Convertemos texto para objeto
let objeto = JSON.parse(texto);
//console.log(objeto.motor[1])

//const ajax = new XMLHttpRequest();
//ajax.open("GET", "https://viacep.com.br/ws/01001000/json/");
//ajax.send();

//ajax.onload = function () {
  //document.querySelector(`p#paragrafo`).innerHTML = this.responseText
  //let objeto = JSON.parse(this.responseText);
  // document.querySelector(`p#paragrafo`).innerHTML = `${objeto.ddd} ` + ` ${objeto.uf}`
//};

function buscar() {
  let cep = document.querySelector(`input#texto1`).value;

  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://viacep.com.br/ws/" + cep + "/json/");
  ajax.send();
  
  ajax.onload = function(){
    let text = document.querySelector(`P#paragrafo1`).innerHTML = this.responseText
    // transformei o texto em objeto
    let obj = JSON.parse(text)
    document.querySelector(`P#paragrafo1`).innerHTML = `${obj.logradouro} <br>` + `${obj.localidade} <br>` + `${obj.bairro}` 
    

  }
}
