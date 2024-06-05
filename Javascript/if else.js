function verificar_cor(){
    let cor = document.querySelector(`input#texto1`).value
    let resultado = document.querySelector(`div#res`)
    cor = cor.toLowerCase()

    if(cor == `azul`){

        document.body.style.backgroundColor = `blue`
    }

    else if(cor == `amarelo`){
        document.body.style.backgroundColor = `yellow`
    }

    else{
        resultado.innerHTML = `Cor não encontrada!`

    }
}