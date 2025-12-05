/*
    um programa que verifica se número é impar ou par
*/
const input =require("../input");

(async() => {
    console.log("Digite um Número: ")
    let num =Number(await input())
    let cont= num % 2 

    if(isNaN(num)){
        console.log("Este número está invalido")
    }else if(num == 0){
        console.log("Você digitou zero")

    }else if(cont == 0){
            console.log("Este Número é Par")
    
    }else{
        console.log("Este Número é Ímpar")
            
    
    }

    
    
})();