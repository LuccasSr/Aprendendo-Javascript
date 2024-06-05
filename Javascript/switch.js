function verificar_cor() {
  let cor = document.querySelector(`input#texto1`).value
  let resultado = document.querySelector(`div#res`)
  cor = cor.toLowerCase();
  switch (cor) {
    case `azul`:
      document.body.style.backgroundColor = `blue`;

      break;

    case `vermelho`:
      document.body.style.backgroundColor = `red`;
      break;

    case `amarelo`:
      document.body.style.backgroundColor = `yellow`;
      break;

      case `verde`:
        document.body.style.backgroundColor = `green`
        break;

        default:
            resultado.innerHTML = `Cor nao encontrada!`

  }
}
