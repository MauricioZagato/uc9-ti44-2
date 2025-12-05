//Enquanto usuario disser sim continua
const input= require("../input");

(async () => {
    let quest
    
    do{ //sempre quando eu quero que execute pelo o menos uma vez
        console.log("Digite a resposta SIM OU NÃO")
        let quest = await input()
        quest=quest.toUpperCase()


    }while(quest == "SIM" )
    
})()
