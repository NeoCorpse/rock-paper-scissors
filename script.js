'use strict';

let humanScore = 0;
let computerScore = 0;
let rounds = 1;
let choices = ['rock', 'paper', 'scissors'];
const roundPara = document.querySelector('.rounds');
const result = document.querySelector('div.result');
const buttons = document.querySelector('.buttons');
const scores = document.querySelector('.scores');

roundPara.textContent = `Round ${rounds}. First to five wins!`;

function playGame(e, computerChoice = getCompChoice()) {
	let choice = e.target.textContent.toLowerCase();
	if (choice === 'rock') {
		switch (computerChoice) {
			case 'rock':
				result.textContent = "That's a tie!";
				scores.textContent = `Player score: ${humanScore} || Computer score: ${computerScore}`;
				break;
			case 'paper':
				result.textContent = 'Shoot! Paper beats rock :(';
				computerScore++;
				scores.textContent = `Player score: ${humanScore} || Computer score: ${computerScore}`;
				break;
			case 'scissors':
				result.textContent = 'Yay! Rock beats scissors :)';
				humanScore++;
				scores.textContent = `Player score: ${humanScore} || Computer score: ${computerScore}`;
				break;
		}
	}
	if (choice === 'paper') {
		switch (computerChoice) {
			case 'paper':
				result.textContent = "That's a tie!";
				scores.textContent = `Player score: ${humanScore} || Computer score: ${computerScore}`;
				break;
			case 'scissors':
				result.textContent = 'Shoot! Scissors beats paper :(';
				computerScore++;
				scores.textContent = `Player score: ${humanScore} || Computer score: ${computerScore}`;
				break;
			case 'rock':
				result.textContent = 'Yay! Paper beats rock :)';
				humanScore++;
				scores.textContent = `Player score: ${humanScore} || Computer score: ${computerScore}`;
				break;
		}
	}
	if (choice === 'scissors') {
		switch (computerChoice) {
			case 'scissors':
				result.textContent = "That's a tie!";
				scores.textContent = `Player score: ${humanScore} || Computer score: ${computerScore}`;
				break;
			case 'rock':
				result.textContent = 'Shoot! Rock beats scissors :(';
				computerScore++;
				scores.textContent = `Player score: ${humanScore} || Computer score: ${computerScore}`;
				break;
			case 'paper':
				result.textContent = 'Yay! Scissors beats paper :)';
				humanScore++;
				scores.textContent = `Player score: ${humanScore} || Computer score: ${computerScore}`;
				break;
		}
	}
	rounds++;
	if (humanScore === 5) {
		result.textContent = 'Congratulations!! You won!!!';
		endGame();
	} else if (computerScore === 5) {
		result.textContent = 'You lost!! Womp Womp :(';
		endGame();
	}
}

buttons.addEventListener('click', playGame);

function endGame() {
	buttons.removeEventListener('click', playGame);
	const para = document.createElement('p');
	para.textContent = 'Do you want to play again';
	const myDiv = document.createElement('div');
	const myButton = document.createElement('button');
	myButton.textContent = 'Restart';
	myButton.addEventListener('click', (e) => {
		humanScore = 0;
		computerScore = 0;
		rounds = 1;
		result.textContent = '';
		scores.textContent = '';
		document.body.removeChild(myDiv);
		buttons.addEventListener('click', playGame);
	});
	myDiv.appendChild(para);
	myDiv.appendChild(myButton);
	document.body.appendChild(myDiv);
}

function getCompChoice() {
	return choices[Math.floor(Math.random() * 3)];
}
