class carro {
  constructor(valor1, valor2, valor3) {
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
  }
  buzina(){
    return this.modelo + " buzinou: Biiiiiiiiii"
  }
}

const uno = new carro(`Fiat`, `Uno`, 2001);
const gol = new carro(`Volkswagem`, `Fusion`, 2014);
console.log(`${gol.modelo} ` + "||" + ` ${(gol.ano)}`)
console.log(gol.buzina())
console.log(uno.buzina())

gol.ano = 2015

console.log(gol)

