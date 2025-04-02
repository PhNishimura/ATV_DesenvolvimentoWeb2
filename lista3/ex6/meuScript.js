const fs = require('fs');
const readline = require('readline');


const arquivo = process.argv[2];


const rl = readline.createInterface({
  input: fs.createReadStream(arquivo),
  output: process.stdout,
  terminal: false
});


rl.on('line', (linha) => {
  console.log(linha); 
});

rl.on('close', () => {
  console.log("Leitura finalizada.");
});
