const celular = {
    marcaCelular : "asus",
    tamanhoTela: {
        vertical: 700,
        horizontal: 450,
    },
    ligar: function() {
        console.log('testando')
    }
}

const novoObjeto = Object.assign({bateria: 1000},celular);
console.log(novoObjeto);

const objeto = {...celular};
console.log(objeto);