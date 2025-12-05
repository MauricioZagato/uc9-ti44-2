/*
    um programa que pede 3 número, valida se os números
    são validos, e formam um triangulo, se for um triangulo
    diz se ele é equilatero, isoceles, ou escaleno
*/

const input =require("../input");

(async() => {
    console.log("Digite o primeiro número")
    let tri1 = Number(await input())
    console.log("Digite o segundo número")
    let tri2 = Number(await input())
    console.log("Digite o terceito número")
    let tri3 = Number(await input())


    if(tri1 == 0 || tri2 == 0 || tri3 == 0){
        console.log("Números é igual a zero")
    }else if(isNaN(tri1)|| isNaN(tri2)|| isNaN(tri3)){
        console.log("Números incorreto")

    }else if(tri1 == tri2 && tri2 == tri3){
        console.log("É tringulo equilatero")

    }


    

})()