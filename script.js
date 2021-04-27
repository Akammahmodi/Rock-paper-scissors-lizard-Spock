const player = 0
const computer = 0
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const lizard_div = document.getElementById("Lizard");
const spock_div = document.getElementById("Spock");

rock_div.addEventListener('click', function() {
    console.log("hey you clicked on rock");
});