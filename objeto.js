//mostra so as string do objeto

const objeto = {
    titulo: 'vingadores',
    ano: 2018,
    diretor: 'Robin',
}
function stringObjeto(objeto) {
    for(index in objeto) {
        if(typeof objeto[index] === 'string') {
            console.log(index,objeto[index])
        }
    }
}

stringObjeto(objeto);