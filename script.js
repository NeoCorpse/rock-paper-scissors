"use strict";

let humanScore = 0;
let computerScore = 0;
let rounds;

function getCompChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * 3)]
}

function getUserChoice() {
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
                alert(`Player: ${humanChoice} || Computer: ${computerChoice}
                    That's a tie!`)
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
            case 'rock':
                alert(`Player: ${humanChoice} || Computer: ${computerChoice}
                    Yay! Paper beats rock :)`)
                computerScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
            case 'scissors': 
            alert(`Player: ${humanChoice} || Computer: ${computerChoice}
                Shoot! Scissors beats paper :(`)
                humanScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
        }
    } else if (humanChoice === 'scissors'){
        switch(computerChoice) {
            case 'scissors':
                alert(`Player: ${humanChoice} || Computer: ${computerChoice}
                    That's a tie!`)
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
            case 'rock':
                alert(`Player: ${humanChoice} || Computer: ${computerChoice}
                    Shoot! Rock beats scissors :(`)
                computerScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
            case 'paper': 
            alert(`Player: ${humanChoice} || Computer: ${computerChoice}
                Yay! Scissors beats paper :)`)
                humanScore++;
                alert(`Player score: ${humanScore} || Computer score: ${computerScore}`)
        }
    }
}