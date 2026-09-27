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

