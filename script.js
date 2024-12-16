"use strict";

let humanScore = 0;
let computerScore = 0;
let rounds = 1;
let choices = ['rock', 'paper', 'scissors']

function getCompChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function getUserChoice() {
    alert(`Round ${rounds}!`)
    return (prompt('What do you pick? Rock, paper or scissors?')).toLowerCase()

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        switch(computerChoice) {
            case 'rock':
                alert(`Player: ${humanChoice}  Computer: ${computerChoice} \nThat's a tie!`)
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
                break;
            case 'paper':
                alert(`Player: ${humanChoice} || Computer: ${computerChoice} \nShoot! Paper beats rock :(`)
                computerScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
                break;
            case 'scissors': 
            alert(`Player: ${humanChoice} || Computer: ${computerChoice} \nYay! Rock beats scissors :)`)
                humanScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
                break;
        }
    } else if (humanChoice === 'paper') {
        switch(computerChoice) {
            case 'paper':
                alert(`Player: ${humanChoice} || Computer: ${computerChoice} \nThat's a tie!`)
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
                break;
            case 'rock':
                alert(`Player: ${humanChoice} || Computer: ${computerChoice} \nYay! Paper beats rock :)`)
                computerScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
                break;
            case 'scissors': 
                alert(`Player: ${humanChoice} || Computer: ${computerChoice} \nShoot! Scissors beats paper :(`)
                humanScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
                break;
        }
    } else if (humanChoice === 'scissors'){
        switch(computerChoice) {
            case 'scissors':
                alert(`Player: ${humanChoice} || Computer: ${computerChoice} \nThat's a tie!`)
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
                break;
            case 'rock':
                alert(`Player: ${humanChoice} || Computer: ${computerChoice} \nShoot! Rock beats scissors :(`)
                computerScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
                break;
            case 'paper': 
            alert(`Player: ${humanChoice} || Computer: ${computerChoice} \nYay! Scissors beats paper :)`)
                humanScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
                break;
        }
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    rounds = 1;
    if (confirm('Are you ready to play?')) {
        while (rounds <= 5){
            playRound(getUserChoice(), getCompChoice())
            rounds++;
        }

        humanScore > computerScore? console.log('Yay! You won!') : humanScore === computerScore ? console.log('You tied! Try again to defeat me!'): console.log('Noooo! You lost!');
        console.log(`Your score: ${humanScore}. Computer's score ${computerScore}.`)
    } else {
        alert('I knew you were too scared to face me.')
    }
}