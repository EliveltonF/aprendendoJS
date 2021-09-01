function endereco(rua, bairro,cep) {
    this.rua = rua,
    this.bairro = bairro,
    this.cep = cep
}

const end1 = new endereco('a','b','c');
const end2 = new endereco('a','b','c');

function iguais(end1,end2) {
    return end1.rua ==  end2.rua &&
    end1.bairro == end2.bairro &&
    end1.cep == end2.cep 
}

console.log(iguais(end1,end2));

function tipo(end1,end2) {
    return end1 === end2;
}
console.log(tipo(end1,end2));