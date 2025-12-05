const input= require("../input");

//Atividade Bancária

(async () => {
    let saldo = 300
    console.log("🏦 Bem-vindos ao NextBank © ");
    console.log("Digite 1 para depositar ou 2 para sacar: ");
    let resposta = await input();

    console.log("💵 Digite o valor: ");
    let valor = Number(await input());


    

    if( resposta == "1"){ //Deposito
        if(valor >= 1){
            saldo += valor; 
            console.log("Operação Realizada com sucesso!");

        }else{
            console.log("Este um valor é abaixo de R$1")
        }

    }else if(resposta == "2"){ //Sacar
        if(valor <= saldo){
            saldo -= valor ; 
            console.log("Operação Realizada com sucesso!"); 
        }else{
            console.log("Você não tem dinheiro suficiente para o saque")
        }

        

    }
    console.log(`o valor atual na conta é: R$ ${saldo}`);

    
})();