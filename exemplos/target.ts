let buttonTeste = document.getElementById('button');


buttonTeste?.addEventListener('click', () => {
    if (input1 && input2)
        console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));
})
        
 // target ? possibilita executar o codigo caso o buttonTeste realmente exista