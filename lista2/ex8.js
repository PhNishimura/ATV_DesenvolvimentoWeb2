function dataPorExtenso(data) {
    
    const meses = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
  
   
    const partes = data.split('/');
  
  
    const dia = partes[0];
    const mes = meses[parseInt(partes[1], 10) - 1]; 
    const ano = partes[2];
  

    return `${dia} de ${mes} de ${ano}`;
  }
  

  const data = "17/01/2002";
  console.log(dataPorExtenso(data)); 
s  