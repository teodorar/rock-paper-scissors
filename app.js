const computerChoice = () => {
   let choice;
   let fun = Math.floor(Math.random()*3);
   if(fun === 0){
      choice = "rock"
   } else if (fun === 1){
      choice = "paper"
   } else choice = "scissors"
   return choice;
}

const userChoice = () => {
   let input = prompt("Rock, paper or scissors?").toLowerCase();
   do{
      if(input === 'rock' || input === 'paper' || input === 'scissors'){
         break;
      }
      input = prompt("Rock, paper or scissors?").toLowerCase();
   } while(input !== 'rock' || input !== 'paper' || input !== 'scissors');
   return input;
}


//const userSelection = userChoice();
//const computerSelection = computerChoice(); // 0 - rock; 1 - paper; 2 - scissors

/*
User wins if: 
user chooses rock, computer chooses scissors (2)
user chooses paper, computer chooses rock (0)
user chooses scissors, computer chooses paper(1)
*/

function playRound(user, computer){
   let computerPoints = 0;
   let userPoints = 0;
   if(user === 'rock' && computer === "scissors"|| user === 'paper' && computer === "rock"
      || user === 'scissors' && computer === "paper"){
         console.log(`You win, ${user} beats ${computer}`);
         userPoints++;
      } else if(user === 'rock' && computer === "rock"|| user === 'paper' && computer === "paper"
      || user === 'scissors' && computer === "scissors"){
         console.log(`It's a tie, ${user} ties with ${computer}`)
         computerPoints++;
         userPoints++;
      } else {
         console.log(`You lose, ${computer} beats ${user}`)  
         computerPoints++;
      }
      return {computerPoints, userPoints} ;
}

//console.log(playRound(userChoice(), computerChoice()))


const game = () => {
   let winner;
   let computerScore = 0;
   let userScore = 0;
   for(let i=1; i<=3; i++){
      console.log("round", i);
      let play = playRound(userChoice(), computerChoice());
      if(play.computerPoints === 1 && play.userPoints === 1){
         computerScore++;
         userScore++;
      } else if(play.userPoints === 1){
         userScore++;
      } else{
         computerScore++;
      }
   }
   if(userScore>computerScore){
      winner = 'user'
   } else winner = 'computer';
   return `${winner} wins`;
}

console.log(game());
