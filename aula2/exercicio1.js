//Tranformar Nome de auto em citação

//Pergunte ao usuario o nome e depois e sobrenome,e mostre na saida a citação

const input = require("../input");

(async ()=>{
    console.log("Qual é o primeiro seu primeiro nome: ");
    let nome = await input();
    console.log("Qual é o primeiro seu sobrenome: ");
    let sobrenome = await input();

    let letra = sobrenome[0].toUpperCase();
    let minusculo = nome.toLowerCase();
    let saida = minusculo[0].toUpperCase() + minusculo.slice(1); 
    
    console.log(`Citação ${letra}. ${saida}`); 

})();