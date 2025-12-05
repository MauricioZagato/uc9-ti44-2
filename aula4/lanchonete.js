/*

Você foi contratado para criar o sistema de uma lanchonete.

Esse sistema deve permitir que o cliente escolha o preço dos
produtos usados no lanche e, automaticamente, calcule o valor
final dos lanches considerando o lucro que o cliente espera ter

Os ingredientes são
Pão, salsicha, bacon, purê de batata, salada e batata palha

Este é o cardápio do restaurante
1 - Hotdog simples Salsicha e pure
2 - Dog Salada Salsicha e salada
3 - Dog Duplo Especial Duas salsichas, purê e bacon
4 - Dog-Tudo Duas salsichas, purê em dobro, bacon, salada

Considere que todos os lanches contém Pão e Batata Palha

------ ATIVIDADE
Mostre o valor dos lanches para o dono, sendo o preço de custo,
e o valor para o cliente final, considerando o lucro (preço venda)


*/

const input= require("../input");

(async() => {
    console.log("Bem Vindo ao Lanchonete Quaresma");
    console.log("Selecione o valor Un. dos ingredientes seguindo a ordem: ");
    console.log("Pão:R$  ");
    let pao = parseFloat(await input());
    console.log("Salsicha:R$  ");
    let sal = parseFloat(await input());
    console.log("Bacon:R$  ");
    let bacon = parseFloat(await input());
    console.log("Purê de batata:R$  ");
    let pure = parseFloat(await input());
    console.log("Salada:R$  ");
    let salada = parseFloat(await input());
    console.log("Batata Palha:R$  ");
    let batata = parseFloat(await input());

    console.log("Qual é o valor de lucro que você: ");
    let lucro = parseFloat(await input());

    lucro = lucro /100;
    
    console.log("---Cardapio do Lanchonete---");
    console.log(`1-Hot do Simples: Pão,Salsicha,Púre de Batata,Batata-Palha --------R$${pao + sal + pure + batata + lucro}`);
    console.log(`2-Dog Salada: Pão,Batata-Palha,Salsicha e salada--------R$${pao + salada + sal + batata + lucro}`);
    console.log(`3-Dog Duplo Especial:Pão,Batata-Palha,Duas salsichas,purê e bacon --------R$${pao + batata+(sal = sal*2) +pure + bacon + lucro}`);
    console.log(`4-Dog-Tudo:Pão,Batata-Palha, Duas salsichas, Purê em dobro, bacon, salada--------R$${pao + batata+(sal *= 2) +(pure *= 2) + bacon + salada + lucro}`);





    
})();

