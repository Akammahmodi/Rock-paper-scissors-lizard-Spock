let playerScore = 0
let computerScore = 0
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
const lizard_button = document.getElementById("lizard");
const spock_button = document.getElementById("spock");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices  [randomNumber];
}

function convertWord(letter) {
    if (letter === "rock") return "rock";
    if (letter === "paper") return "paper";
    if (letter === "scissors") return "scissors";
    if (letter === "lizard") return "lizard";
    if (letter === "spock") return "spock";
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(playerChoice)} beats ${convertWord(computerChoice)}. You win`;
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(playerChoice)} loses to ${convertWord(computerChoice)}. You lost...`;
}

function draw(playerChoice, computerChoice) {
    result_p.innerHTML = `${convertWord(playerChoice)} equals ${convertWord(computerChoice)}. Its a tie`;
}

function game(playerChoice) {
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    switch (playerChoice + computerChoice) {
        case "rockscissors":
            win(playerChoice, computerChoice);
            break;
        case "paperrock":
            win(playerChoice, computerChoice);
            break;
        case "scissorspaper":
            win(playerChoice, computerChoice);
            break;
        case "rocklizard":
            win(playerChoice, computerChoice);
            break;
        case "scissorslizard":
            win(playerChoice, computerChoice);
            break;
        case "lizardpaper":
            win(playerChoice, computerChoice);
            break;
        case "lizardspock":
            win(playerChoice, computerChoice);
            break;
        case "spockrock":
            win(playerChoice, computerChoice);
            break;
        case "spockscissors":
            win(playerChoice, computerChoice);
            break;

        case "rockpaper":
            lose(playerChoice, computerChoice);
            break;
        case "paperscissors":
            lose(playerChoice, computerChoice);
            break;
        case "scissorrock":
            lose(playerChoice, computerChoice);
            break;
        case "rockspock":
            lose(playerChoice, computerChoice);
            break;
        case "scissorsSpock":
            lose(playerChoice, computerChoice);
            break;
        case "lizardRock":
            lose(playerChoice, computerChoice);
            break;
        case "paperlizard":
            lose(playerChoice, computerChoice);
            break;
        case "spocklizard":
            lose(playerChoice, computerChoice);
            break;
        case "spockpaper":
            lose(playerChoice, computerChoice);
            break;

        case "rockrock":
            draw(playerChoice, computerChoice);
            break;
        case "paperpaper":
            draw(playerChoice, computerChoice);
            break;
        case "scissorscissors":
            draw(playerChoice, computerChoice);
            break;
        case "lizardlizard":
            draw(playerChoice, computerChoice);
            break;
        case "spockspock":
            draw(playerChoice, computerChoice);
            break;
    }
}
main();
function main() {

    rock_button.addEventListener('click', () =>
        game("rock"));

    paper_button.addEventListener('click', () =>
        game("paper"));

    scissors_button.addEventListener('click', () =>
        game("scissors"));


    lizard_button.addEventListener('click', () =>
        game("lizard"));


    spock_button.addEventListener('click', () =>
        game("spock"));

}