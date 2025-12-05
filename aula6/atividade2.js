function plus(n1,n2=0){
    return n1 + n2;

}

function div(n1,n2=1){
    return n1 / n2
}

function multi(n1,n2=1){
    return n1 * n2
}

function sub(n1,n2=0){
    return n1 - n2
}


const input= require ("../input");


(async () => {
    console.log("Digite uma opção das opções: ")
    console.log(`
        1-Soma
        2-Divisão
        3-Multiplicação
        4-Subtração
        `)
    let opcao1=await input()
    
    let func;

    switch(opcao1){
        case "1":  
             func = plus;
             break;

        case "2": 
            func = div;
            break;
        case "3": 
            func = multi;
            break;
        case "4":
            func = sub;
            break;

    
        

    }
    if(Number(opcao1) > 4)return

   
    console.log("Digite primeiro números: ");

    let e1 =Number(await input());
    console.log("Digite segundo números: ");
    let e2 =Number(await input());
    let reposta= func(e1,e2)
    console.log(`O Resultado é : ${reposta}`);


})()








    