//soma os multiplos de 3 e 5

function somaMult(numero) {
    let somaNumeros = 0;
    for (let i = 0; i <= numero; i++) {
        if (i % 3 === 0) {
            somaNumeros += i;
        }
        else if (i % 5 === 0) {
            somaNumeros += i;
        }
    }
    console.log('O restultado da soma dos ' + numero + " numeros é igual: " + somaNumeros);
}

somaMult(100);