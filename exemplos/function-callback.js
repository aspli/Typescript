"use strict";
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
/* function somarValoresNumericos(numero1: number, numero2: number): number{
    return numero1 + numero2;
} // function: number  Defindo o tipo de retorno da função para number */
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
