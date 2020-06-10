let playerScore = 0;
let compScore = 0;
let rounds = noOfRounds();
function noOfRounds(){
    while(true){   	  
        let rounds = prompt("Number of Rounds: ");
        
        if (rounds == null) {
        	alert("You should've entered a number Brownie :(");
            return true;
        }
        else{
        	if (rounds.length<=0 || isNaN(rounds)) { 
            	alert("Invalid input.");
            }
            else {
                return parseInt(rounds);
            }
        }           
    }                    
}
let currentRound = 0;
const playerCounter = document.getElementById('playerScore');
const showRound = document.getElementById('currentRound');
const compCounter = document.getElementById('compScore');
const declareRes = document.getElementById('declaration');

function computerPlay() {                              	
	let res = '';
	let rand = (Math.floor(Math.random()*3)+1);		   		
	if(rand == 1){
		res = "Rock";
	}
	else if(rand == 2){
		res = "Paper";						
	}
	else{
		res = "Scissors";
	}
	return res;
}

function playRound(playerSelection, computerSelection){		
	let result = '';
	if(playerSelection == "rock"){								
		if(computerSelection == "Rock"){
			result = "Draw";
		}
		else if(computerSelection == "Paper"){
			result = "You lose! Rock loses to paper";
			compScore++;
		}
		else{
			result = "You win! Rock beats Scissors";
			playerScore++;
		}
	}

	else if(playerSelection == "paper"){
		if(computerSelection == "Rock"){
			result = "You win! Paper beats Rock";
			playerScore++;
		}
		else if(computerSelection == "Paper"){
			result = "Draw";
		}
		else{
			result = "You lose! Paper loses to Scissors";
			compScore++;
		}
	}

	else if(playerSelection == "scissors"){					
		if(computerSelection == "Rock"){
			result = "You lose! Scissors loses to Rock";
			compScore++;
		}
		else if(computerSelection == "Paper"){
			result = "You win! Scissors beat Paper";
			playerScore++;
		}
		else{
			result = "Draw";
		}
	}
	currentRound++;
	showRound.textContent = currentRound;
	scoreUpdater(result);
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener('click', userClick));

function userClick(){
	declareRes.textContent = '';
	playRound(this.id, computerPlay());
}

function scoreUpdater(whoWon) {
	const resWindow = document.getElementById('roundRes');

	resWindow.textContent = whoWon;

	if (whoWon.substring(4,7) == 'win') {
		playerCounter.textContent = playerScore;
	}
	else if(whoWon.substring(4,8) == "lose"){
		compCounter.textContent = compScore;
 	}
 	if(currentRound == rounds){
 		if(playerScore>compScore){
 			declareRes.textContent = "GAME OVER! You win: " + playerScore + " to " + compScore;
 		}
 		else if(playerScore<compScore){
 			declareRes.textContent = "GAME OVER! You lose: " + playerScore + " to " + compScore;
 		}
 		else{
 			declareRes.textContent = "GAME OVER! It's a Draw: " + playerScore + " to " + compScore;
 		}
 		reset();
 	}
}

function reset(){
	playerScore = 0;
	compScore = 0;
	currentRound = 0;
	playerCounter.textContent = playerScore;
	compCounter.textContent = compScore;
}
