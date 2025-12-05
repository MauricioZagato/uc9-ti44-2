function random(inferior=0, superior=1, tipo='float'){

    if(superior<inferior)
    {
        console
            .error("Numero superior deve ser maior que o numero");
        return;
    }

    switch(tipo){
        case 'float': 
            return Math.random()
                *(superior+1-inferior)+(inferior);
        case 'int': 
            return Math.floor(Math.random()
                *(superior+1-inferior))+(inferior);
    }   
}

function validaCPF(cpf){
    cpf = cpf.replace(/\D/g, '');

    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) return false;

    // Elimina CPFs inválidos conhecidos (ex: todos dígitos iguais)
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Função auxiliar para calcular dígitos
    function calculaDigito(cpfParcial, fator) {
        let total = 0;
        for (let i = 0; i < cpfParcial.length; i++) {
            total += parseInt(cpfParcial[i]) * fator--;
        }
        const resto = total % 11;
        return resto < 2 ? 0 : 11 - resto;
    }

    const digito1 = calculaDigito(cpf.slice(0, 9), 10);
    const digito2 = calculaDigito(cpf.slice(0, 10), 11);

    // Compara com os dígitos do CPF informado
    return digito1 === parseInt(cpf[9]) && digito2 === parseInt(cpf[10]);
}

function validaEmail(emaiL){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emaiL);

}

function validaTel(telefone){
    telefone = telefone.replace(/\D/g, ""); // remove tudo exceto números

    return telefone.length === 10 || telefone.length === 11;
}

module.exports ={
    random,validaCPF,validaEmail,validaTel
   
}