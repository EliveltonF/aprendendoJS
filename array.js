//add novos elementos

const numeros = [1,2,3];

//add no inicio do array
numeros.unshift(0);
console.log(numeros);


//add no meio do array(escolhe a posição, se apaga ou n e oq bota)
numeros.splice(2,0,1.1);
console.log(numeros);


//add no fim do array
numeros.push(4);
console.log(numeros);

//Encontrar elementos

console.log(numeros.indexOf(1.1));//verifica onde tem
console.log(numeros.lastIndexOf(1.1)); //verifica o ultimo numero no array
console.log(numeros.includes(1.1));//verifica sem tem

//encontrando elementos

const marcas = [
    {id:1,nome:'a'},
    {id:12,nome:'ab'},
    {id:123,nome:'abc'},
];

let fiind = marcas.find(function(marca) {
    return marca.nome ==='abc';
});
console.log(fiind)

let fiiind = marcas.find((marca) => marca.nome === 'ab');
console.log(fiiind);

//removendo elemntos


console.log(numeros.pop());//numero removido no fim do array
console.log(numeros)//como ficou o array


console.log(numeros.shift())//numero removido no inicio do array
console.log(numeros)//como ficou

console.log(numeros.splice(1,1))//numero removido no meio
console.log(numeros)//como ficou



//reomover todos elementos dentro de um array
numeros.splice(0,numeros.length)
console.log(numeros);


//concat array

let numeros1 = [1,2,3]
let numeros2 = [9,7,6]

console.log(numeros2.concat(numeros1)); //juntas esses coisos

console.log([...numeros1,...numeros2]);



//corta array
const cortado = numeros1.slice(1,3);
console.log(cortado);


//foreach

numeros2.forEach((numero,index) => console.log(numero,index));



//combinando arrays

const num = [1,2,3,4,5];
console.log(num.join('-'))

const frase = 'teste um dois tres';
const fraseJunta = frase.split(' ');
console.log(fraseJunta);
console.log(frasejunta.join(' '));//deu erro