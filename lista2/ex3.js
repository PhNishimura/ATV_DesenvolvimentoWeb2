function arrayToList(arr) {
    if (arr.length === 0) {
      return null; 
    } else {
      return { valor: arr[0], restante: arrayToList(arr.slice(1)) }; 
    }
  }
  

  const lista = arrayToList([1, 2, 3]);
  console.log(JSON.stringify(lista, null, 2));
  