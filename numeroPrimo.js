//se for primo apareçe

function primo(numero) {
    for (let i = 2; i < numero; i++) {
        let primo = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                primo = false;
                break;
            }
        } if (primo) { console.log(i) }
    }
}

primo(15);