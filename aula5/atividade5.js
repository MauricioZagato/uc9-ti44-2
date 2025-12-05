/*
Faça um programa que permita que usuário cadastrar uma agenda telefônica,pedindo nome e telefone,a cada item inserido perguntar
se ele deseja inserir um novo,no máximo 5 itens. No Final exiba todos os itens da lista

*/

const input=require ("../input");

(async () => { //iniciando a função anomima asincrona

    let agenda=[]; //declara um vetor vazio chamado agenda
    let continuar; //declara uma variavel chamada continuar
    
    do{ //inicia meu laço
        console.log("Digite um nome: ")
        let nomeE =await input()
        console.log("Digite um telefone: ")
        let tel =await input()
        agenda.push({})
        agenda.push({
            nome: nomeE,
            telefone: tel
            
        });
        console.log("Deseja continuar: sim?")
        continuar= (await input()).toLowerCase();
        
    }while(agenda.length <=5 && continuar == "sim")
    console.log(agenda)
        
        

    
    
})();