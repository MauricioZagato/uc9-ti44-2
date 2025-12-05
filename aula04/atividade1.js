//Cardapio Básico da Lanchonete

const input= require("../input");

(async () => {
    console.log("Bem-Vindo,Escolha um lanche no Cardapio")
    console.log("Digite o Lanche Desejado: 1 -X-Salada ,2-X-Burguer ,3-Misto Quente, 4-Suco Natural,5-Refrigerante")
    let item=Number(await input())

    switch(item){
        case 1:
            console.log("Você escolheu X-Salada");
            break;
        case 2:
            console.log("Você escolheu X-Burguer");
            break;
        case 3:
            console.log("Você escolheu Misto Quente");
            break;
        case 4:
            console.log("Você escolheu Suco Natural")
            break;
        case 5:
            console.log("Você escolheu Refrigerante")
            break;
        default:
            console.log("Você não escolheu nenhuma opção")

    }
    
})()