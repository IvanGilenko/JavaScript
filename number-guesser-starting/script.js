let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  var number = Math.floor(Math.random() * 10);
  return number;
}

function compareGuesses(human, computer, target){
  humanGuess = Math.abs(human - target);
  computerGuess = Math.abs(computer - target);
  if(humanGuess <= computerGuess){
    return true;
  }
  else{
    return false;
  }
}

function updateScore(winner){
  if(winner == 'human'){
    humanScore++;
  }
  else{
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber++;
}
