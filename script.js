"use strict";

let humanScore;
let computerScore;
let rounds;

function getCompChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * 3)]
}

function getUserChoice() {
    return (prompt('What do you pick? Rock, paper or scissors?')).toLowerCase()
}