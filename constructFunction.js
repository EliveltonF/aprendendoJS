function celular(marcaCelular,tamanhoTela,tamanhoBateria) {
    this.marcaCelular = marcaCelular;
    this.tamanhoTela = tamanhoTela;
    this.tamanhoBateria = tamanhoBateria;
}

const marcaCelular = new celular("samsumg",7.0,3000);
console.log(marcaCelular);