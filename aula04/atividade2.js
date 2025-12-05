//Cálculo de valor do pedido pelo código do produto

const input= require("../input");

(async () => {
    console.log("Bem-Vindo a Salada Lanches")
    console.log("Escolha um item entre a lista")
    console.log("100 - X-Salada- R$ 12.00")
    console.log("101 - X-Burger- R$ 10.00")
    console.log("102 - Cachorro-Quente -R$ 8.50")
    console.log("103 - Suco -R$ 6.00")
    console.log("104 - Refrigerante (R$ 5.00)")
    console.log("Selecione o código: ")

    let codigo =Number(await input())
    console.log("E a quantidade: ")
    let quant =Number(await input())
    
    switch(codigo){
        case 100:
            console.log(`Você pediu ${quant} do X-Salada,R$ ${quant *12.00}`)
            break;
        case 101:
            console.log(`Você pediu ${quant} do X-Burguer,R$ ${quant * 10.00}`)
            break;
        case 102:
            console.log(`Você pediu ${quant} do Cachorro-Quente,R$ ${quant * 8.50}`)
            break;
        case 103:
            console.log(`Você pediu ${quant} do Suco,R$ ${quant * 6.00}`)
            break;    
        case 104:
            console.log(`Você pediu ${quant} do Refrigerante,R$ ${quant * 5.00}`)
            break;  
        default:
            console.log("Codigo Invalido")

    }

})()