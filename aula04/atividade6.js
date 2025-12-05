//Forma de pagamento e acréscimos/descontos


const input= require("../input");


(async (params) => {
    console.log("Bem Vindo ao Aleo")
    console.log("Qual é forma de Pagamento")
    console.log("1 - Dinheiro (10% de desconto)")
    console.log("2 - Débito (5% de desconto)")
    console.log("3 - Crédito (sem desconto)")
    console.log("4 - pix (8% de desconto)")
    let pagamento=Number(await input())

    console.log("Qual é o valor: ")
    let valor =Number(await input())

    switch(pagamento){
        case 1:
            des= valor * 0.1
            console.log(`Forma escolhida:${pagamento}. Valor final: R$ ${des - valor}`)
            break;
        case 2:
            des= valor * 0.05
            console.log(`Forma escolhida:${pagamento}. Valor final: R$ ${des - valor}`)
            break;
        case 3:
            
            console.log("Sem Desconto")
            break;
        case 4:
            des= valor * 0.08
            console.log(`Forma escolhida:${pagamento}. Valor final: R$ ${des - valor}`) 
            break;
        default:
            console.log("Forma de pagamento inválida") 
    

    }
    
})()