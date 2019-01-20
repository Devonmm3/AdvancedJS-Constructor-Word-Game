var Letter = require("./letter.js");

var Word = function (word) {
    this.createWord = function (word) {
        var storeLetters = [];
        for (var i = 0; i < word.length; i++) {
            var currentLetterChoice = new Letter(word[i]);
            storeLetters.push(currentLetterChoice);
        }
        return storeLetters;
    }
    this.letters = this.createWord(word);
    this.wordChoice = word;

    this.guessChecker = function (guess) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].letterGuess(guess);
        }
    }

    this.display = function () {
        var storeLetters = "";
        for (var i = 0; i < this.letters.length; i++) {
            storeLetters = +this.letters[i].display();
        }
        return storeLetters;
    }

}

module.exports = Word;