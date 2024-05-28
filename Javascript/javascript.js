function verificar(){
    var numero = document.querySelector(`input#numero1`)
    var resoluçao = document.querySelector(`div#res`)
    numero = (numero.value)

    if(numero <=5){
        resoluçao.innerHTML = `Entao ta`
    }

    else if(numero <=10){
        resoluçao.innerHTML = `É noixs`
    }
    else{
        resoluçao.innerHTML = `É o que sobrou`
    }





}