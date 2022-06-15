"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let uncknowValor;
uncknowValor = 3;
uncknowValor = 'opa';
uncknowValor = true;
uncknowValor = 'vai sim';
let stringTest2 = 'agora vai';
if (typeof uncknowValor === 'string') {
    stringTest2 = uncknowValor; //fazendo um teste de tipo pode se garantir o tipo correto
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('Deu Erro!!!', 500);
