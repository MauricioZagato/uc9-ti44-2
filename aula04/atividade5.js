//Programa de fidelidade (nível do cliente)

const input= require ("..//input");

(async () => {
    console.log("Bem Vindo Resgate Ponto")
    console.log("Quanto o valor que você quer resgatar: ")
    let ponto = Number(await input())

    
    switch(true){
        case ponto < 100:
            console.log("Cliente Iniciante");
            console.log("Direito a desconto de 30%");
            break;
        case ponto >= 100 && ponto < 300:
            console.log("Cliente Bronze");
            console.log("Direito a desconto de 50%");

            break;
        case ponto >= 300 && ponto < 700:
            console.log("Cliente Prata");
            console.log("Direito a desconto de 80%");

            break;
        case ponto >= 700:
            console.log("Cliente Ouro");
            console.log("Direito a um combo grátis por mês");

            break;
        }






})()