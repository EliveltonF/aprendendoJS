let end = {
    rua: 'a',
    bairro: 'b',
    estado: 'c',
}
function mostraEndereco(end) {
    for(let chave in end) {
        console.log(chave,end[chave])
    }
}

mostraEndereco(end);