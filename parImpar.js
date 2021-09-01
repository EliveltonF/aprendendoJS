//recebe quantidade de valores pra avaliar
// função exibe se cada valor e impar ou par

function avaliarNumero(numero) {
    for(let i = 0;i<=numero;i++) {
        if(i%2 === 0) {
            console.log(i+" PAR");
        }
        else{console.log(i+" IMPART");}
    }

}

avaliarNumero(101)