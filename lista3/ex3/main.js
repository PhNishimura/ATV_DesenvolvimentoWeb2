// main.js
// Importe as funções do módulo conversor.js
// Dica: Utilize a sintaxe de named imports
// Realize as seguintes conversões:
// 1. Converta 5 quilogramas para libras
// 2. Converta 10 metros para pés
// 3. Converta 25 graus Celsius para graus Fahrenheit
// Exiba os resultados no console.
// Saída esperada:
// Quilogramas para Libras: 5 kg = 11.0231 lb
// Metros para Pés: 10 m = 32.8084 ft
// Celsius para Fahrenheit: 25°C = 77°F


import {quiloParaLibra, metroParaPe, celsiusParaFahrenheit} from './conversor.js'; 

//1- 
const quilogramas = 5;
const libras = quiloParaLibra(quilogramas);
console.log(`Quilogramas para Libras: ${quilogramas} kg = ${libras} lb`);

//2- 
const metro= 10;
const pe = metroParaPe(metro); 
console.log(`Metro para pé ${pe}`);

//3- 
const grau= 25;
const fe = celsiusParaFahrenheit(grau); 
console.log(`Celsius para Fahrenheit: ${fe}`);