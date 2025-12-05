
//Pergunte um número ao usuário, converta com Number(), e mostre o dobro.

const input=require ("../input");

(async()=>{
    console.log("Digite um número: ")
    let num = Number(await input())
    let dob = (num * 2)
    console.log("Digite o dobro é " + dob)



})()