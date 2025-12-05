//Tamanho do lanche / combo (trabalhar com strings)

const input= require("../input");

(async () => {
    console.log("Bem-Vindo as Salada Lanches");
    console.log("Selecione o tamanho do seu Combo P,M,G: ");
    let tamanho = await input()
    
    tamanho=tamanho.toUpperCase()

    

    switch (tamanho){
        case "P":
            console.log("O P: Combo Pequeno escolhido (R$ 15.00)");
            break;
        case "M":
            console.log("O M: Combo Médio escolhido (R$ 20.00");
            break;
         case "G":
            console.log("O G: Combo Grande escolhido (R$ 25.00).");
            break;
        default:
            console.log("Tamanho inválido.");




    }


    
})()