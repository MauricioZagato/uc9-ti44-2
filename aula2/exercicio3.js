//Peça ao usuário digitar uma frase contendo a palavra "startup" e substitua por "empresa".

const input=require ("../input");

(async()=>{
        console.log("digite uma frase contendo a palavra startup.")
        let frase = await input();
        console.log(frase.replace("startup","empresa"))

        
    
})()