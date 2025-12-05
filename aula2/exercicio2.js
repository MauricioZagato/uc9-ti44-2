//Peça ao usuário dois números e exiba a soma.


const input = require("../input");

(async()=>{
    console.log("Bem-Vindo a Calculadora de Soma");
    console.log("Digite o primeiro o número: ");
    let numx = Number(await input());
    console.log("Digite o segundo número: ");
    let numy = Number(await input());
    let somaz = (numx + numy);
    console.log(`Soma entre ${numx} + ${numy} = ${somaz}.`);

})()