
const input= require("../input");

(async () => {
    
    let quest = "SIM";
   
    while(quest == "SIM" ){
        console.log("Digite a resposta SIM OU NÃO")
         quest = await input()
        quest=quest.toUpperCase()
    }

    
})()
