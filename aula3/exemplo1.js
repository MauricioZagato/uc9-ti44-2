const input = require ("../input");

(async () => {
    console.log("Quantos ano voçê tem?");
    let idade = await input();  
    if(idade < 18){
        console.log("bloquado")

    }else{
        console.log("Bem-Vindo")

    }

})()