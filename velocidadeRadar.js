//maximo 70
//a cada 5 ganha 1 ponto
//mais de 12 pontos suspende carteira

function velocidadeRadar(numero) {
    if(numero <= 70) {
        return console.log('ok');
    }
    let pontos = (Math.floor(numero - 70)/5 * 1);
    if(pontos >12) {
        return console.log("perdeu carteira, ultrapassou o limite de 12 pontos");
    }
    return console.log("passou da velocidade, ganhou "+ pontos +" pontos!");
}

velocidadeRadar(1005)