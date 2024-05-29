const carro = {
  Marca: `Fiat`,
  Modelo: `Uno`,
  Ano: `2013`,
  Preco: `20000,0`,

  // criando metodo
  buzina: function () {
    alert(`Biiiiiiiiiiii`);
  },

  completo: function () {
    return `A marca é: ` + this.Marca + `, e o modelo é: ` + this.Modelo;
  },
};

console.log(`${carro.completo()}`);
