const fs = require('fs');
const path = './arquivo.csv'; 

async function lerArquivo() {
  let init = Date.now();
  
  try {

    const data = await fs.promises.readFile(path, 'utf-8');
    

    const linhas = data.split("\n");
    

    console.log(linhas);

    let end = Date.now();
    console.log(`Tempo total (leitura de uma vez): ${end - init} ms`);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }
}

lerArquivo();
