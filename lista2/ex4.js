function listToArray(lista) {
    let arr = [];
    for (let node = lista; node !== null; node = node.restante) {
      arr.push(node.valor); 
    }
    return arr;
  }
  

  const array = listToArray(lista);
  console.log(array); 
  