const prompt = require("prompt-sync");

function verificaNumero(numero) {
    if(numero % 2 === 0) {
        console.log(numero +" é par")
    }else{
        console.log(numero +" é impar")
    }


}

verificaNumero (4);
verificaNumero(17);
verificaNumero(20);
verificaNumero(30);
verificaNumero(0);