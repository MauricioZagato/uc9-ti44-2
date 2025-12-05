console.log("Olá Mundo"); //Realiza a impressão do Olá Mundo

var nome = "Leo" // Criando uma variavél

// Estou fazendo uma concatenação
console.log("Olá "+nome) 

var idade= 35;

// Estou fazendo uma interpolação

/*
"" - aspas
' ' - apostrofe
` ` - crase

*/
/*
() -
[] -
{} -
*/
console.log (`Olá ${nome},sua idade é ${idade}`);
//Criação de Vetor
//camalcase  cestaCafe
var cestaCafe = [] // Estou Declarado um vetor
cestaCafe[0] = "Cafe"; //uma atribuição
cestaCafe[1] = "Ovo";


//udercase cesta_cafe
var cesta_cafe = ["cafe", "ovo"];

cestaCafe.push("bacon");                //Adicina uma um valor na proxima posição disponivel
cesta_cafe.push("pão");

console.log(cestaCafe);
console.log(cesta_cafe);

// Atividade: Crie um Vetor que guarde o nome, idade e telefone

var info_user = []
info_user.push("LEO");
info_user.push(23);
info_user.push("1698855223");

console.log("idade: "+info_user[1]);

//Estrutura, dicionario, classe anonima"JavaScript"
var usuario = {
    nome: "Leo",
    idade: 23,
    telefone: "16 98855223"

}
console.log(usuario.idade);


//Atividade: Faça uma lista telefonica, com nome,telefone e endereço

var num_lista = [];

num_lista.push({
    nome: "LEO",
    tel: "1600000",
    endereco: "rua advits"

});

num_lista.push({
    nome: "SILA",
    tel: "1600001",
    endereco: "rua BON"

});




console.log(num_lista);

// Atividade Produtos; Criar uns produtos,somar os produtos
var produtos =[]

produtos.push({
    nome: "Maça",
    codigo: "1234",
    valor: 5

});

produtos.push({
    nome: "Bolacha",
    codigo: "12345",
    valor: 6

});

console.log(`A soma da ${produtos[0].nome} mais ${produtos[1].nome} ,igual ${produtos[0].valor + produtos[1].valor }`);

//Atividade: Lista de ALunos e sua pesperctivas notas e suas médias : 3 alunos


var alunos =[]

alunos.push({
    nome: "Maria",
    nota: 10

})

alunos.push({
    nome: "Jose",
    nota: 5

})

alunos.push({
    nome: "Silano",
    nota: 2

})

var media = (alunos[0].nota + alunos[1].nota + alunos[2].nota )/3

console.log("A média da sala é  "+ media)

