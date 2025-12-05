/*
    um programa que pergunta se a pessoa que ganhar um
    presente misterioso, se ela dizer "sim" ela fala
    ganho ou abraço, se ela dizer não fala ela ganhou
    50 reais
*/

const input =require("../input");

(async () => {
        console.log("Quer ganhar um presente misterioso: sim ou não")
        let resp = await input()
        if(resp.toLowerCase() == "sim"){
            console.log("Você ganhou um abraço")

        }else if(resp.toLowerCase() == "não"){
            console.log("Você ganhou 50 reais") 

        }else{
            console.log("Resposta incorreta")
        }
})()

