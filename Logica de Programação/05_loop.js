//Aula de laço de repetição



let contador = 0
let continuar_loop= true //bool
while(continuar_loop == true){
    contador++ //Aumenta o valor da variavél em exetamente 1
    //console.log("Olá Boa Noite! Repetiu "+ contador+" vezes")

    if(contador == 100000000){
        console.log("Aee passou um milhão");
        //break;
        continuar_loop = false;

    };




}
