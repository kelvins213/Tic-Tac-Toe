var digitos = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

var values_dos_campos = document.getElementsByTagName("input");
var vez_da_jogada = 1;

function resgatarInputs() {
  var cont = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      digitos[i][j] = values_dos_campos[cont]
      cont++;
    }
  }
}

function adicionarEscutadores() {
  for (var i = 0; i < 3; i++) {
    Array.from(digitos[i]).forEach((valor) => { valor.addEventListener("click", verificarSeHaVencedor) });
    Array.from(digitos[i]).forEach((valor, coluna) => {
      valor.addEventListener("click", () => {
        var id = parseInt(valor.id)
        if (id < 3) {
         inserirCaracter(0, coluna) 
        }else if(id < 6){
          inserirCaracter(1,coluna)
        }else{
         inserirCaracter(2,coluna) 
        }
      })
    });
  }
}

function inserirCaracter(linha, coluna) {
  if (vez_da_jogada % 2 != 0) {
    digitos[linha][coluna].value = "X";
  }
  else {
    digitos[linha][coluna].value = "O";
  }
  vez_da_jogada++;
}

function verificarLinhas() {

}

function verificarColunas() {

}

function verificarDiagonalPrincipal() {

}

function verificarDiagonalSecundaria() {

}

function play() {
  resgatarInputs();
  adicionarEscutadores();
}

function verificarSeHaVencedor() {
  console.log("ih rpz")
  verificarLinhas();
  verificarColunas();
  verificarDiagonalPrincipal();
  verificarDiagonalSecundaria();
}

play();
