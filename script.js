//Declaring variables to store player & computer's selections
// These variables will be used in the playRound function
let playerSelection = "";
let computerSelection = "";

// Declaring variables, which will keep a record of the scores 
let playerScore = 0;
let computerScore = 0;

// This function stores the player's choice, and calls the function to get the game started 
let playerChoiceRock = function(){
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
}
let playerChoicePaper = function(){
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
}
let playerChoiceScissors = function(){
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
}
// This function generates a random choice for the computer
let computerPlay = function(){ 
    let choice = ["rock", "paper", "scissors"];
     return choice[Math.floor(Math.random() * 3)];
  }

// This function starts the game. It returns the results of the game and keeps track of the score 
let playRound = function (playerSelection, computerSelection){
        playerSelection;
        computerSelection = computerPlay();
    if(playerSelection == "rock" && computerSelection == "rock"){
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "It's a Tie! You Both Chose ROCK";
    } else if(playerSelection == "rock" && computerSelection == "paper"){
            computerScore ++;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "You Lose! PAPER Beats ROCK";
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
            playerScore ++;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "You Win! ROCK Beats SCISSORS";
    }
    if(playerSelection == "paper" && computerSelection == "paper"){
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "It's a Tie! You Both Chose PAPER";
      } else if(playerSelection == "paper" && computerSelection == "rock"){
            playerScore ++;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "You Win! PAPER beats ROCK";
      } else if(playerSelection == "paper" && computerSelection == "scissors"){
            computerScore ++;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "You Lose! SCISSORS beats PAPER";
      }
      if(playerSelection == "scissors" && computerSelection == "scissors"){
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "It's a Tie! You Both Chose SCISSORS";
      } else if(playerSelection == "scissors" && computerSelection == "rock"){  
            computerScore ++;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "You Lose! ROCK Beats SCISSORS";
       
      } else if(playerSelection == "scissors" && computerSelection == "paper"){
            playerScore ++;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "You Win! SCISSORS Beats PAPER";
      }
      if((playerScore == 5 || computerScore == 5) && (playerScore > computerScore)){
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "WINNER!";
            playerScore = 0;    
            computerScore = 0;
      } else if((playerScore == 5 || computerScore == 5) && (playerScore < computerScore)){
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("results").innerHTML = "Computer Wins!";
            playerScore = 0;
            computerScore = 0;
      }
    }

    // Event listeners to allow the players to choose between Rock, Paper and Scissors
    let rockBtn = document.getElementById("r").addEventListener("click", playerChoiceRock);
    let paperBtn = document.getElementById("p").addEventListener("click", playerChoicePaper);
    let scissorsBtn = document.getElementById("s").addEventListener("click", playerChoiceScissors);


      
