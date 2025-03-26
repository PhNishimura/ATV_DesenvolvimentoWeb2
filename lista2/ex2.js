function deepEqual(a, b) {

    if (a === b) {
      return true;
    }
  

    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
      return false;
    }
  

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
  

    if (keysA.length !== keysB.length) {
      return false;
    }
  

    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
  

    return true;
  }
  

  const obj1 = { param1: "valor1", param2: "valor2" };
  const obj2 = { param1: "valor1", param2: "valor2" };
  const obj3 = { param1: "valor1", param2: "outroValor" };
  const obj4 = { param1: "valor1" };
  
  console.log(deepEqual(obj1, obj2)); // true
  console.log(deepEqual(obj1, obj3)); // false
  console.log(deepEqual(obj1, obj4)); // false
  console.log(deepEqual(null, null)); // true
  console.log(deepEqual(null, obj1)); // false
  