var Letter = function (character) {
    this.character = character;
    this.isGuessedLetter = false;

    this.display = function () {
        if (this.character == " ") {
            return (" ");
        } else if (this.isGuessedLetter) {
            return (this.character)
        } else if (this.character == "'") {
            return ("'")
        } else if (this.character == "-") {
            return ("-");
        }
    }
    this.guessLetter = function (guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.isGuessedLetter = true;
        }
    }

}

module.export = {
    Letter
}