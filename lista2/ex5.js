function prepend(elemento, lista) {
    return { valor: elemento, restante: lista }; 
  }
  
  
  const novaLista = prepend(0, lista);
  console.log(JSON.stringify(novaLista, null, 2));
  