//Peça ao usuário uma frase e mostre quantos caracteres ela tem.
const input= require("../input");


(async () => {
    console.log("Digite uma Frase")
    let frase = await input()
    let contf = frase.length
    console.log(`Sua frase tem ${contf} caracteres.`)

    
})();