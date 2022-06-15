type input = number | string; // criando um tipo que pode ser number ou string

function somarValores(input1: number | string, input2: number | string){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toLocaleString();
    }else{
        return input1 + input2;
    }
}

function somarValoresTipoPersonalizado(input1: input, input2: input){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toLocaleString();
    }else{
        return input1 + input2;
    }
}

console.log(somarValores(1, 5));
console.log(somarValoresTipoPersonalizado(1, 5));
console.log(somarValores('1', 5));
console.log(somarValoresTipoPersonalizado('1', 5));
