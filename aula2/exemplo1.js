//estou fazendo uma importação, trazer funções externas para dentro deste arquivo

const input = require("../input"); //puxando o arquivo e guardando na variavel input 

//declarei uma variavel do tipo const chamada input


//É uma função anonima

(async() => {
    console.log("Qual é sua idade: ");
    let idade = await input();  // LET É uma  varivel que  funciona só mente dentro das chaves {}
    console.log(idade);
})();



