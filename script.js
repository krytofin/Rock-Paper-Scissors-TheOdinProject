function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function getHumanChoice(){
    let player_choice = prompt("Enter rock, paper or scissors");
    player_choice = player_choice.toLowerCase();
    return player_choice;
}

let humanScore = 0;
let humanDisplay = document.querySelector(`#player_score`);
let computerScore = 0;
let computerDisplay = document.querySelector(`#computer_score`);

function updateScoreDisplay(){
    humanDisplay.textContent = humanScore;
    computerDisplay.textContent = computerScore;
}
updateScoreDisplay();

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "draw";
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore ++;
        updateScoreDisplay();
        return 'you win';
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore ++;
        updateScoreDisplay();
        return 'you win';
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore ++;
        updateScoreDisplay();
        return 'you win';
    }
    else if (computerChoice == 'rock' && humanChoice == 'scissors'){
        computerScore++;
        updateScoreDisplay();
        return 'you lost';
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper'){
        computerScore++;
        updateScoreDisplay();
        return 'you lost';
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock'){
        computerScore++;
        updateScoreDisplay();
        return 'you lost';
    }
}
const humadChoiceDisplay = document.querySelector(`#player_selection`);
const computerChoiceDisplay = document.querySelector(`#computer_selection`);
const gameStatus = document.querySelector(`#game_status`);

const btnToPlay = document.querySelectorAll(`.play_btn`);
btnToPlay.forEach((button)=>{
    button.addEventListener(`click`, ()=>{
        let humanChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        humadChoiceDisplay.textContent = humanChoice;
        computerChoiceDisplay.textContent = computerChoice;
        
        let result = playRound(humanChoice, computerChoice);
        gameStatus.textContent = result;
        if (humanScore == 5 || computerScore == 5){
            if (humanScore == 5)
                gameStatus.textContent = "You win!!!";
            else
                gameStatus.textContent = "Computer win!!!";
            btnToPlay.forEach((btn)=>{
                btn.remove();
            })
        }

    })
})