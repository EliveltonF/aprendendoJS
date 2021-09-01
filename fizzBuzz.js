//divisivel por 3 - fizz
//divisivel por 5 - buzz
//divisivel pelos dois - fizzbuzz

function fizzBuzz(numero) {
    if(numero % 3 == 0 && numero % 5 !== 0) {
        return console.log('fizz');
    }else if(numero % 3 !== 0 && numero % 5 == 0) {
        return console.log('buzz');
    }
    else if(numero % 3 == 0 && numero % 5 == 0){return console.log('FizzBuzz');}

    else{return console.log("oq foi digitado nao esta dentro das opções!")}
};

fizzBuzz(11);