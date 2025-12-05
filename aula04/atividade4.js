//Desconto por valor da compra (switch(true) com faixas)

const input= require("../input");

(async () => {
    console.log("Digite um o valor total da compra: ");
    let totalCompra= Number(await input())

    switch(true){
        case totalCompra >= 100:
            desc= totalCompra * 0.2
            console.log("Desconto de 20% aplicado.")
            console.log(`Valor total é ${totalCompra - desc}`)
            break;
        case totalCompra >= 50 && totalCompra < 100:
            desc= totalCompra * 0.1
            console.log("Desconto de 10% aplicado.")
            console.log(`Valor total é ${totalCompra - desc}`)
            break;
        case totalCompra >= 20 && totalCompra < 50:
            desc= totalCompra * 0.05
            console.log("Desconto de 5% aplicado.")
            console.log(`Valor total é ${totalCompra - desc}`)
            break;


        default:
            console.log("Sem Desconto,valor muito baixo")

    }


})()

