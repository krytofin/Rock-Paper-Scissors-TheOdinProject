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
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "draw";
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore ++;
        return 'you win';
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore ++;
        return 'you win';
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore ++;
        return 'you win';
    }
    else if (computerChoice == 'rock' && humanChoice == 'scissors'){
        computerScore++;
        return 'you lost';
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper'){
        computerScore++;
        return 'you lost';
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock'){
        computerScore++;
        return 'you lost';
    }
}
for (let i=0; i<5; i++){
    let result = playRound(getHumanChoice(), getComputerChoice());
    console.log(result);
    console.log(`Score: you: ${humanScore}, computer: ${computerScore}`);
    console.log('======================================================')
}
