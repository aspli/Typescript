let anyEstaDeVolta: any;

anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let uncknowValor: unknown;

uncknowValor = 3;
uncknowValor = 'opa';
uncknowValor = true;
uncknowValor = 'vai sim';

let stringTest2: string = 'agora vai';

if(typeof uncknowValor === 'string'){
    stringTest2 = uncknowValor; //fazendo um teste de tipo pode se garantir o tipo correto
}

function jogaErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo}
}

jogaErro('Deu Erro!!!', 500);