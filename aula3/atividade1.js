/*
Um programa que verifica se a pessoa colocou saldo maior que 5 e apertou o número 42 se for verdade de para ele uma coca cola se não mande ele embora,e devolva o dinheiro
*/

const input= require("../input");

(async () => {
   console.log("Digite um saldo?");
   let saldo = Number(await input());
   console.log("Aperte um número dos produtos  seguir: 32 ,50 ou 42 ? ");
   let botao = Number(await input());

    if(isNaN(saldo)|| saldo <= 0 ||isNaN(botao) ||botao <= 0){
        console.log("Número Invalido")
    }else{
            if(saldo >= 5 && botao == 42 ){
            console.log("Você ganhou uma coca-cola")

            }else{
                 console.log("Sai fora do programa")

            }; 
    };
       
   
})();