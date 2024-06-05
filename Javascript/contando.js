function soma() {
  let resultado = document.querySelector(`div#res`);

  for (let num1 = 1; num1 <= 10; num1++) {
    resultado.innerHTML += `contando ${num1}<br>`;
  }
}
