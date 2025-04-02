const fs = require('fs');
const path = './arquivo.csv'; 

function lerArquivoEmFluxo() {
  let init = Date.now();
  

  const readStream = fs.createReadStream(path, 'utf-8');
  
  let data = '';
  

  readStream.on('data', (chunk) => {
    data += chunk;
  });

  readStream.on('end', () => {
    const linhas = data.split("\n"); 


    console.log(linhas);

    let end = Date.now();
    console.log(`Tempo total (leitura em fluxo): ${end - init} ms`);
  });

  readStream.on('error', (err) => {
    console.error('Erro ao ler o arquivo:', err);
  });
}

lerArquivoEmFluxo();
