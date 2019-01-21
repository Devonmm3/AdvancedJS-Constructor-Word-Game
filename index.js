var inquirer = require("inquirer");

var Word = require("./word.js");
var sansSerif = require("sans-serif");
var chalkStencil = require("chalk-stencil");

var guess = 15;
var points = 0;

var teamsToGuess = ["Giants", "Patriots", "Seahawks", "Titans", "Eagles", "Ravens", "Redskins", "Chargers", "Saints", "Texans", "Bears", "Packers", "Lions", "Vikings"];

var chosenTeam;
var randomTeam;

function startGame() {

    console.log(chalkStencil.green("Guess the Football Teams!"));
}

function gameChooseTeam() {
    randomTeam = teamsToGuess[Math.floor(Math.random() * teamsToGuess.length)]
    chosenTeam = new Word(randomTeam);
}

function playerGuessTeam() {

    if (guesses > 0 && points < 5) {
        console.log(chosenTeam.display());

        inquirer.prompt([{
            name: "txt",
            message: "Guess a letter",
            validate: function (string) {
                if (string.length != 1) return false;
                return RegEx.test(string);
            }
        }]).then(function (letterGuess) {
            var guess = letterGuess.txt;
            chosenTeam.checkTheGuess(guess);
        })
    }
}