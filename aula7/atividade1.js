

const input = require("../input");
const {validaCPF} = require ("../aula6/leo");

(async () => {

    
    console.log("Digite seu CPf");
    let cpf= await input();
    
    if(validaCPF(cpf)){
        console.log("Seu Cpf está valido");

    }else{
        console.log("Seu Cpf está invalido");
    };


    
})();