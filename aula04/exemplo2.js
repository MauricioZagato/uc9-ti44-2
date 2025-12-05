

function tigrinho(){
    return Math.floor(Math.random() * 10);
}

let sorteado = tigrinho()

switch(true){    //switch recebe um valor
    case sorteado > 3:
        console.log("Parabéns Você Ganhou presente maximo");
           // break Se ele  estiver na relação ele para

    case sorteado == 2 :
        console.log("Você ganhou uma caixa de leite");
         // break Se ele estiver na relação ele para
    default:        // Caso não for nenhum dos casos    
        console.log("Ganhou Nada");

}