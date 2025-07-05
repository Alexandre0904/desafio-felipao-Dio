const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let entradas = [];

rl.on('line', (input) => {
  entradas.push(parseInt(input));

  if (entradas.length === 2) {
    const posicaoInicial = entradas[0];
    const totalPassos = entradas[1];
    const posicaoFinal = posicaoInicial + totalPassos;

    console.log("Posicao final do heroi:", posicaoFinal);
    rl.close();
  }
});
