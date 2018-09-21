const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  	if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log("Please choose Rock, Paper or Scissors.")
    }
};

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  if(randomNum === 1){
   return 'rock';
  } else if(randomNum === 2){
   return 'scissors';
  } else {
    return 'paper';
  }
};

let determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'Game is a tie.';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'scissors'){
      return 'You won!';
    } else {
      return 'You lost!';
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'rock'){
      return 'You won!';
    } else {
      return 'You lost!';
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'paper'){
      return 'You won!';
    } else {
      return 'You lost!';
    }
  }
};
function playGame(){
  let userChoice = getUserChoice('Rock');
  let computerChoice = getComputerChoice();
  console.log(`You have chosen ${userChoice}`);
  console.log(`Computer has chosen ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
