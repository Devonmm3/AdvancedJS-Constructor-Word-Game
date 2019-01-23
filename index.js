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

    if (guess > 0 && points < 5) {
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
            if (randomTeam.lowerCase().indexOf(guess.lowerCase()) === -1) {
                guess--;
                console.log(chalkStencil.purple("WRONG! " + guess + " chances left!"))
            } else {
                if (points < 5) {
                    console.log(chalkStencil.red("Right on!"))
                }
            }
            if (randomTeam === chosenTeam.display()) {
                console.log(chosenTeam.display());
                guess = 10;
                points++;
                if (points < 5) {
                    console.log(chalkStencil.red("YAS YAS YAS! Next Team Woohoo!"));
                    gameChooseTeam();
                } else {
                    winGame();
                }
            }
            if (guess === 0) {
                loseGame();
            }
            playerGuessTeam();
        });
    }
}

function loseGame() {
    console.log(chalkStencil.purple("GAME OVER BOO!"));
    inquirer.prompt([{
            name: "confirm",
            type: "confirm",
            message: "Play again?",
            default: true
        }])
        .then(function (inquirerResponse) {
            if (inquirerResponse.confirm) {
                guess = 10;
                points = 0;
                gameChooseTeam();
                playerGuessTeam();
            } else {
                console.log(chalkStencil.red("See you next season!"));
                process.exit();
            }
        })
}

function winGame() {
    sansSerif("TOUCHDOWN!!!!!!!!!!!!!!", function (err, data) {
        if (err) {
            console.log("Whoops! There is an error");
            console.dir(err);
            return;
        }
        console.log(data)
    })
    inquirer.prompt([{
            name: "Confirm",
            type: "confirm",
            message: "Want to play again?",
            default: true
        }])
        .then(function (inquirerResponse) {
            if (inquirerResponse.comfirm) {
                guess = 10;
                points = 0;
                gameChooseTeam();
                playerGuessTeam();
            } else {
                console.log(chalkStencil.purple("bye bye!"))
                process.exit();
            }
        })

}

startGame();
gameChooseTeam();
playerGuessTeam();