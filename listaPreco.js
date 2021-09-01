let faixaDePreco = {
    cadeira1: 100,
    cadeira2: 200,
    cadeira3: 300,
    cadeira4: 400,
    cadeira5: 500,
    cadeira6: 600,
    cadeira7: 700,
    cadeira8: 800,
}

function maiorPreco(array) {
    let maxValor = 0;
    for (let index in array) {
        if (array[index] > maxValor) {
            maxValor = array[index];
        }

    }
    return maxValor;
}
console.log("maior preço")
console.log(maiorPreco(faixaDePreco));

function menorPreco(array) {
    let maxValor = 999999999999999;
    for (let index in array) {
        if (array[index] < maxValor) {
            maxValor = array[index];
        }

    }
    return maxValor;
}

console.log("menor preço")
console.log(menorPreco(faixaDePreco));


