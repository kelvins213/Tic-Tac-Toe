var digitos = [
    ["","",""],
    ["","",""],
    ["","",""],
    ["","",""],
    ["","",""],
    ["","",""],
];
var values_dos_campos = document.getElementsByTagName("input");
var vez_da_jogada = 1;


function resgatarInputs(){
    var cont = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            digitos[[i],[j]] = values_dos_campos[cont]
            console.log(i,j)
            console.log(digitos[[i],[j]])
            cont++;
        }
    }
}

function inserirCaracter(identificacao){
    if (vez_da_jogada % 2 != 0) {
        values_dos_campos[identificacao].value = "X";
    }
    else{
        values_dos_campos[identificacao].value = "O";
    }
    verificarLinhas();
    verificarColunas();
    verificarDiagonalPrincipal();
    verificarDiagonalSecundaria();
    vez_da_jogada++;
}

function verificarLinhas(){
    var contarCaracteresIguais = 1;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 2; j++) {
            if (digitos[[i],[j]].value == digitos[[i],[j+1]].value ) {
                contarCaracteresIguais++;
            }
        }
        var contarCaracteresIguais = 1;
        if (contarCaracteresIguais == 3) {
            console.log("opa")
            //escrever uma mensagem de que alguém ganhou o jogo
            break;
        }
    }
}

function verificarColunas(){
    var contarCaracteresIguais = 1;
   for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 3; j++) {
            if (digitos[[i+1],[j]].value == digitos[[i+1],[j]].value ) {
                contarCaracteresIguais++;
            }
        }
        var contarCaracteresIguais = 1;
        if (contarCaracteresIguais == 3) {
            //escrever uma mensagem de que alguém ganhou o jogo
            console.log("opa")
            break;
        }
    }
}

function verificarDiagonalPrincipal(){
    var contarCaracteresIguais = 1;
    for (var i = 0; i < 2; i++) {
        var j = i;
        if (digitos[[i],[j]].value == digitos[[i+1],[j+1]].value ) {
            contarCaracteresIguais++;
        }

    }
    if (contarCaracteresIguais == 3) {
        console.log("opa")
        //escrever uma mensagem de que alguém ganhou o jogo
    }
}

function verificarDiagonalSecundaria(){
    var contarCaracteresIguais = 1;
    for (var i = 0; i < 2; i++) {
        for (var j = 2; j != 0; j--) {
            if (digitos[[i],[j]].value == digitos[[i+1],[j-1]].value ) {
                contarCaracteresIguais++;
            }
        }
        var contarCaracteresIguais = 1;
        if (contarCaracteresIguais == 3) {
            console.log("opa")
            //escrever uma mensagem de que alguém ganhou o jogo
            break;
        }
    }
}

function play(){
    resgatarInputs();
}
