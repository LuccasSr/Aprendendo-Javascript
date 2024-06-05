let ano = new Date().getFullYear()

for(let valor1 = ano; valor1 >=1900; valor1--){
    document.querySelector(`select#ano`).innerHTML +="<option value='"+valor1+"'>"+valor1+"</option>"
}


const carros = ["Fusca", "Chevette", "Palio", "Del rey", "Fiat 47"]
let tamanho = carros.length
let resultado = document.querySelector(`div#res`)
for(let valor1 = 0; valor1 <tamanho; valor1++ ){
    resultado.innerHTML += carros[valor1] + " - "
} 