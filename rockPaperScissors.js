const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error')
  }
  
}
const getComputerChoice = () => {
 const random= Math.floor(Math.random()*3);
  switch(random)
  {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissor';
  }
}
const determineWinner = (userChoice,computerChoice) => {
 if(userChoice === 'bomb')
 console.log('user won')
  if(userChoice===computerChoice )
  {return   'The game is a tie ';}
  if(userChoice==='rock')
  {
    if(computerChoice==='paper')
    {return 'computer won'}
    else {
      return 'user Won !';
    }
  }
  if(userChoice==='paper')
  {
    if(computerChoice==='scissors')
    { return 'The computer won!'}
    else {return 'You won!'}
  }
  if(userChoice==='scissors')
  {
    if(computerChoice==='rock')
    {return 'The compute won!'}
    else{
      return 'You won!'
    }
  }
}
const playGame = () => {
  const userChoice = getUserChoice('scissors');
   const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
};

playGame();


