function verificar(){
    let input =  document.querySelector(`input#texto1`).value
    let resultado = document.querySelector(`p#res`)
    
resultado.innerHTML += input + " <br> "
}