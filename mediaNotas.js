/*
0-59:f
60-69:d
70-79:c
80-89:d
90-100:a 
*/

const arrayNum = [60,50,100];
function media(numeros) {
    let somaNumeros = 0;
    for(index of numeros) {
        somaNumeros += index;
    }
    somaNumeros = somaNumeros/3;
    if(somaNumeros <=59) {
        console.log('f');
    }else if(somaNumeros <=69 && somaNumeros >= 60) {
        console.log('d')
    }else if(somaNumeros <=79 && somaNumeros >= 70) {
        console.log('c')
    }else if(somaNumeros <=89 && somaNumeros >= 80) {
        console.log('b')
    }else {
        console.log('a')
    }
    
}
media(arrayNum);