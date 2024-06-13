let contador = 0 // nosso contador da lista começar em 0
let input = document.querySelector(`input#texto1`);
let botao = document.querySelector(`button#bb`);
let main = document.querySelector(`main#arealista`);

function addtarefa() {
  let inputNovo = input.value;
  if (inputNovo !== "" && inputNovo !== null && inputNovo !== undefined) {
    ++contador
    
    // fizemos essa variavel contador para poder dar ordem numericas para cada item criado.,
    // para cada item criado no input, 
    //so assim conseguimos deletar pelo botao criado chamado delete
    let novoitem = `<div id="${contador}" class="item">
        
        <div class="item-icon" onclick="marcarTarefa(${contador})">
          <ion-icon class="ellipse-outline" name="ellipse-outline" id="icone_${contador}"></ion-icon>
        </div>

        <div class="item-nome" onclick="marcarTarefa(${contador})">
        ${inputNovo}
        </div>

        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete"><ion-icon name="trash-outline"></ion-icon>Deletar</button>
        </div>
      </div>`;

    //adiciona novo item no main
    main.innerHTML += novoitem;

    // zerar os campos
    input.value = "";
    input.focus();
  }
}
// criamos essa function para conseguir deletar os itens da lista criada
function deletar(id){
    let tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id){
    let item = document.getElementById(id)
    let classe = item.getAttribute('class')
    if(classe == "item" ){
        item.classList.add('clicado')

        let icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-ellipse-outline')
        icone.classList.add('mdi-checkmark-circle-outline')
    }

}
// criamos esse addEventListener, para poder adicionar os itens tambem com o enter
input.addEventListener("keyup", function (event) {
  // se teclou a tecla 'Enter'
  if (event.key === "Enter") {
    //para previnir se a tecla ja veio com alguma predefiniçao de atalho
    event.preventDefault();
    bb.click();
  }
});


