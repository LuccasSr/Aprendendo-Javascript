function verificar(){
    let numero = document.querySelector(`input#numero1`).value
    let resoluçao = document.querySelector(`div#res`)
    

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