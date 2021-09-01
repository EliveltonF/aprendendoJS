//recebe numero e transforma em desenho

function exibirDesenho(numero) {
    let somaNum = 0;
    let des = '*';
    while(somaNum<numero) {
        console.log(des);
        des += '*';
        somaNum++;
    }
}
exibirDesenho(50);