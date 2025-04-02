const express = require('express'); 

const {User, printName, printAge} = require ('./user'); 

const app = express(); 
const port = 8080; 

const user = new User('Amazing', 100);


app.get('/user_data', (req, res) => {
    // Retorna uma resposta com o nome e idade do usuário
    res.send(`User's name is ${user.name} and User's age is ${user.age}`);
  });
  
  // Inicia o servidor
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });