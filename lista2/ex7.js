const arrays = [[1, 2, 3], [4, 5], [6]];

const resultado = arrays.reduce((acumulador, atual) => acumulador.concat(atual), []);

console.log(resultado); 
