
//Word List to Guess
var presidents =
	["Lincoln", "Roosevelt", "Kennedy", "Clinton", "Reagan", "Obama", "Carter", "Washington", "Adams", "Bush", "Nixon"];

//Letter Function, fill it in if guessed
var letter = require("./letter.js");

exports.game = function() {
	this.guessCount = 10;
	this.guessedLetters = [];
	this.word = presidents[Math.floor(Math.random() * presidents.length)];
	this.guessedWord = [];
	this.init = function() {
		for(var i = 0; i < this.word.length; i++) {
			var char = this.word.charAt(i);
			var obj = new letter.letter(char);
			this.guessedWord.push(obj);
		}
	};
	this.printProgress = function() {
		var progress = "";
		for(var i = 0; i < this.guessedWord.length; i++) {
			progress += this.guessedWord[i].display() + " ";
		}
		console.log(progress);
	};
	this.checkLetter = function(letter) {
		for(var i = 0; i < this.guessedLetters.length; i++) {
			if(letter == this.guessedLetters[i]) {
				return true;
			}
		}
		this.guessedLetters.push(letter);
		return false;
	};
	this.checkWord = function() {
		for(var i = 0; i < this.guessedWord.length; i++) {
			if(this.guessedWord[i].guessed === false) {
				return false;
			}
		}
		return true;
	};
};

