
function getComputerChoice(computer){
    let choice = (Math.floor(Math.random() * 3)) ;
    

    let answers = ["rock", "paper", "scissors"]
    let number = answers[choice];
    return number;

}




let playerAnswer = getPlayerChoice();
let computerAnswer = getComputerChoice();





function playGame(){
    console.log(playerAnswer);
    console.log(computerAnswer);
    let playerScore = 0;
    let computerScore = 0;
    let a = 0;

    while (a < 5){
        //const computerSelection = getComputerChoice();
        //const playerSelection = getPlayerChoice();
        playRound(getPlayerChoice(), getComputerChoice())
        a++;
    }
    function playRound(playerChoice, computerChoice){
    
        if(playerChoice === computerChoice){
            console.log('Tie');
        } else if(
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') || 
            (playerChoice === 'scissors' && computerChoice === 'paper')
        )   {console.log('You won!') 
             playerScore++;  
        } else if (
            (playerChoice === 'scissors' && computerChoice === 'rock') ||
            (playerChoice === 'rock' && computerChoice === 'paper') || 
            (playerChoice === 'paper' && computerChoice === 'scissors')
        ){console.log("Computer won!");
            computerScore++;}

            else {
                console.log('Invalid round.');
            }
        } 
        console.log('The final score is ' + playerScore + ' to ' + computerScore )
    }
    
    
  

playGame();

function getPlayerChoice(){
    let choice = prompt('What is your choice? (Rock, Paper, Scissors)');
    return choice;
}