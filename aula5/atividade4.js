/*
 Faça um Programa que sorteia até 10 números,ou até o usuario acertar 

 */



const input= require("../input");



(async () => {
    
   
    for(let sorteio =-1,usuario,i=0;sorteio != usuario && i < 10;i++){
        sorteio = Math.floor(Math.random() * 10);
        console.log("Digite um número: ");
        usuario= Number(await input());
        


    };

   // }while(sorteio != usuario && i < 10){
       
       



    
})();


