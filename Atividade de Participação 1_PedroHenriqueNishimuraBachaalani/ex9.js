function executeFunction(func, a, b){
    return func(a, b); 
}

function soma(a,b){ 
    return a + b;
}

const multiply = (a, b) =>  a * b

console.log(executeFunction(soma, 2, 3)); // 5
console.log(executeFunction(multiply, 2, 3)); // 6