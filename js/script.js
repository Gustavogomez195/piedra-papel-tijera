let myArray = ["piedra", "papel", "tijera"];
let aleatorio = "";

function getComputerChoice() {
  aleatorio = myArray[(Math.random() * myArray.length) | 0];
  return aleatorio;
}

function playRaund(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    alert("Empate");
  } else if (playerSelection === "piedra" && computerSelection === "papel") {
    alert("Perdiste");
  } else if (playerSelection === "papel" && computerSelection === "tijera") {
    alert("Perdiste");
  } else if (playerSelection === "tijera" && computerSelection === "piedra") {
    alert("Perdiste");
  } else {
    alert("Ganaste");
  }
}

for (let i = 0; i < 4; i++) {
  const playerSelection = prompt("Ingrese piedra, papel o tijera : ");

  const computerSelection = getComputerChoice();

  playRaund(playerSelection, computerSelection);
}
