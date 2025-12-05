let prompt = require("prompt-sync")();

let resposta =parseInt(Math.random(1,10));
let numero =9

let tentativas = 10
while (tentativas > 0){
    numero = parseInt(prompt("Digite um Número: "));
    
    if(numero == resposta){
        console.log("Acertou,parabéns")
        break;

    }else{
        console.log("Você errou ....")
    }
    tentativas -= 1
    
   


}


