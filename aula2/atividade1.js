/*
façam um programa que pede o nome e a idade  e que mostre na saida
*/

const input = require("../input");

(async() => {
    console.log("Qual é seu nome: ");
    let nome = await input();
    console.log("Qual é sua idade: ");
    let idade = await input();
    console.log(`Olá ${nome},sua idade é ${idade}.`);

})();