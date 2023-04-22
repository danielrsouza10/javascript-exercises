const removeFromArray = function(array, ...args) {
    
    //cria uma array vazia para receber os items da matriz anterior
    const myArray = [];

    //A funcao forEach percorre todos os elementos presentes na matriz e executa a acao que for designada
    array.forEach((item) => {
        //percorre a matriz e adiciona todos os itens na nova matriz
        //exceto (!args) os incluidos no parametro args recebido pela funcao
        if(!args.includes(item)){
            //adiciona os elementos na matriz
            myArray.push(item);
        }
    })  //retorno da funcao
        return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
