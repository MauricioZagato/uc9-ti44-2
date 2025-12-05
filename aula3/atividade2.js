/*
    um programa que verifica se a pessoa colocou a senha
    "senac123" ou  se ela tem a chave para abrir a porta
*/
const input =require("../input");

(async() => {
    console.log("Digite sua senha ou chave?");
    let senha= await input();
    if(senha == "senac123" || senha.toLowerCase() == "sim"){
        console.log("Bem-Vindo");

    }else{
        console.log("Senha ou chave incorreta");
    

    }
    
})();