function nth(lista, n) {
    if (n === 0 && lista !== null) {
      return lista.valor; 
    } else if (lista === null) {
      return undefined; 
    } else {
      return nth(lista.restante, n - 1); 
    }
  }
  
 
  console.log(nth(lista, 0)); 
  console.log(nth(lista, 1)); 
  console.log(nth(lista, 2)); 
  console.log(nth(lista, 3)); 
  