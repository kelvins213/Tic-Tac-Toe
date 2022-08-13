var digitos = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
var arrayX = ["X", "X", "X"]
var arrayO = ["O", "O", "O"]

var inputs = document.getElementsByTagName("input");
var vez_da_jogada = 1;

function resgatarInputs() {
  var cont = 0
  for (let i = 0; i < digitos.length; i++) {
    for (let j = 0; j < digitos.length; j++) {
      digitos[i][j] = inputs[cont]
      cont++;
    }
  }
}

function adicionarEscutadores() {
  for (var i = 0; i < digitos.length; i++) {
    Array.from(digitos[i]).forEach((valor, coluna) => {
      valor.addEventListener("click", () => {
        var id = parseInt(valor.id)
        if (id < 3) {
          inserirCaracter(0, coluna)
        } else if (id < 6) {
          inserirCaracter(1, coluna)
        } else {
          inserirCaracter(2, coluna)
        }
      })
    });
    Array.from(digitos[i]).forEach((valor) => { valor.addEventListener("click", verificarSeHaVencedor) });
  }
}

function inserirCaracter(linha, coluna) {
  if (digitos[linha][coluna].value == "") {
    if (vez_da_jogada % 2 != 0) {
      digitos[linha][coluna].value = "X";
    } else {
      digitos[linha][coluna].value = "O";
    }
    vez_da_jogada++;
  }
}

function verificarLinhas() {
  for (var i = 0; i < digitos.length; i++) {
    var contarCaracteresIguaisX = 0;
    var contarCaracteresIguaisO = 0;
    digitos[i].forEach((input, coluna) => {
      if (input.value == arrayX[coluna]) {
        contarCaracteresIguaisX += 1;
      } else if (input.value == arrayO[coluna]) {
        contarCaracteresIguaisO += 1;
      }
    });
    contarCaracteresIguais(contarCaracteresIguaisX, contarCaracteresIguaisO);
  }
}

function verificarColunas() {

}

function verificarDiagonalPrincipal() {
  var contarCaracteresIguaisX = 0;
  var contarCaracteresIguaisO = 0;
  for (var i = 0; i < digitos.length; i++) {
    if (digitos[i][i].value == arrayX[i]) {
      contarCaracteresIguaisX += 1;
    } else if (digitos[i][i].value == arrayO[i]) {
      contarCaracteresIguaisO += 1;
    }
  }
  contarCaracteresIguais(contarCaracteresIguaisX, contarCaracteresIguaisO);
}

function verificarDiagonalSecundaria() {
  var contarCaracteresIguaisX = 0;
  var contarCaracteresIguaisO = 0;
  var j = 2
  for (var i = 0; i < digitos.length; i++) {
    if (digitos[i][j].value == arrayX[i]) {
      contarCaracteresIguaisX += 1;
    } else if (digitos[i][j].value == arrayO[i]) {
      contarCaracteresIguaisO += 1;
    }
    j--;
  }
  contarCaracteresIguais(contarCaracteresIguaisX, contarCaracteresIguaisO)
}

function contarCaracteresIguais(contarCaracteresIguaisX, contarCaracteresIguaisO) {
  if (contarCaracteresIguaisX == digitos.length) {
    imprimirVencedor("X");
  } else if (contarCaracteresIguaisO == digitos.length) {
    imprimirVencedor("O");
  }
}

function imprimirVencedor(winner) {
  document.getElementById("mensagem-de-resultado").textContent = "o jogador " + winner + " foi o vencedor!";
  for (var i = 0; i < digitos.length; i++) {
    for (var j = 0; j < digitos.length; j++) {
      digitos[i][j].setAttribute('disabled', 'disabled');
    }
  }
}

function verificarSeHaVencedor() {
  verificarLinhas();
  verificarColunas();
  verificarDiagonalPrincipal();
  verificarDiagonalSecundaria();
}

function play() {
  resgatarInputs();
  adicionarEscutadores();
}

play();
