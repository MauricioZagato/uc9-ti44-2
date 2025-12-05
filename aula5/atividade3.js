/*
 Faça um Programa que sorteia até 10 números,ou até o usuario acertar 

 */



const input= require("../input");



(async () => {
    
    let sorteio
    let usuario
    let i = 0
    
    do{
        sorteio = Math.floor(Math.random() * 10);
        console.log("Digite um número: ");
        usuario= Number(await input());
        i++;



    }while(sorteio != usuario && i < 10){
       
       



    };
    
})()


