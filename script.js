const things = ["rock", "paper", "scissors"];
let playerRound = 0;
let computerRound = 0;

const computerPlay = () => {
  let computerChoice = things[Math.floor(Math.random() * things.length)];
  return computerChoice;
};

const playerPlay = () => {
  const playerChoice = prompt(
    "Choose one of the following:\nrock\npaper\nscissors"
  );
  const playerChoiceLowerCase = playerChoice.toLowerCase();
  if (
    playerChoiceLowerCase === "rock" ||
    playerChoiceLowerCase === "paper" ||
    playerChoiceLowerCase === "scissors"
  ) {
    return playerChoiceLowerCase;
  } else {
    alert("Wrong answer!\nChoose one of the following:\nrock\npaper\nscissors");
    return playerPlay();
  }
};

const playRound = (playerSelection, computerSelection) => {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "scissors":
      playerRound++;
      console.log(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You won!`
      );
      alert(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You won!`
      );
      console.log(`You ${playerRound} - ${computerRound} Computer`);
      alert(`You ${playerRound} - ${computerRound} Computer`);
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      playerRound++;
      console.log(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You won!`
      );
      alert(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You won!`
      );
      console.log(`You ${playerRound} - ${computerRound} Computer`);
      alert(`You ${playerRound} - ${computerRound} Computer`);
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      playerRound++;
      console.log(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You won!`
      );
      alert(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You won!`
      );
      console.log(`You ${playerRound} - ${computerRound} Computer`);
      alert(`You ${playerRound} - ${computerRound} Computer`);
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      computerRound++;
      console.log(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You lose!`
      );
      alert(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You lose!`
      );
      console.log(`You ${playerRound} - ${computerRound} Computer`);
      alert(`You ${playerRound} - ${computerRound} Computer`);
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      computerRound++;
      console.log(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You lose!`
      );
      alert(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You lose!`
      );
      console.log(`You ${playerRound} - ${computerRound} Computer`);
      alert(`You ${playerRound} - ${computerRound} Computer`);
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      computerRound++;
      console.log(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You lose!`
      );
      alert(
        `You chose ${playerSelection} and computer chose ${computerSelection}! You lose!`
      );
      console.log(`You ${playerRound} - ${computerRound} Computer`);
      alert(`You ${playerRound} - ${computerRound} Computer`);
      break;
    case playerSelection === computerSelection:
      console.log(
        `You chose ${playerSelection} and computer chose ${computerSelection}! Tie!`
      );
      alert(
        `You chose ${playerSelection} and computer chose ${computerSelection}! Tie!`
      );
      console.log(`You ${playerRound} - ${computerRound} Computer`);
      alert(`You ${playerRound} - ${computerRound} Computer`);
      break;
    default:
  }
};

const game = () => {
  alert(
    "Welcome to the rock, paper, scissors game!!\nDo you have what it takes to defeat me?"
  );
  for (let i = 0; i < 5; i++) {
    alert(`Round ${i + 1}`);
    const playerSelection = playerPlay();
    console.log("This is my choice", playerSelection);
    const computerSelection = computerPlay();
    console.log("This is the computer choice", computerSelection);
    playRound(playerSelection, computerSelection);
  }
  if (playerRound > computerRound) {
    alert(
      `Game Finish!!! You Won!\nYou ${playerRound} - ${computerRound} Computer`
    );
  }
  if (playerRound < computerRound) {
    alert(
      `Game Finish!!! You Lose!\nYou ${playerRound} - ${computerRound} Computer`
    );
  }
  if (playerRound === computerRound) {
    alert(
      `Game Finish!!! Tie!\nYou ${playerRound} - ${computerRound} Computer`
    );
  }
};

game();
