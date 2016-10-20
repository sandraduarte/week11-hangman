// Importing data from other necessary files
var game = require("./game.js");
var word = require("./word.js");
var readline = require('readline');

// Read input from user
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var guessedLetter;
var newGame = new game.game();

// Initiate game
newGame.init();

//console.log(newGame.word);
console.log("______________________");
console.log("Presidential HANGMAN");
console.log("______________________");
console.log("Guesses left: " + newGame.guessCount);
newGame.printProgress();
process.stdout.write("\nYour Guess: ");

rl.on('line', function(line){
	// Check if valid input
	if(line.trim().length != 1 ) {
		console.log("Please guess a letter");
		process.stdout.write("Your Guess: ");
	}
	else {
    	guessedLetter = line.trim();
    	// Check duplicate guess
    	if(newGame.checkLetter(guessedLetter) == true) {
    		console.log("Already guessed. Guess again");
    		console.log("Guesses left: " + newGame.guessCount);
    		newGame.printProgress();
    		process.stdout.write("\nYour Guess: ");
    		return;
    	}
    	// Check if current guess is correct
    	if(word.checkMatch(guessedLetter, newGame)) {
    		console.log("You got it!");
    	}
    	else {
    		console.log("Nope. Try again!");
    		newGame.guessCount--;
    	}
    	console.log("Guesses left: " + newGame.guessCount);
    	newGame.printProgress();
    	console.log();
    	
    	// Check if all letters were correctly guessed
    	if(newGame.checkWord()) {
    		console.log("YOU WON!!");
    		process.exit();
    	}
    	if(newGame.guessCount <= 0) {
    		console.log("No more guesses. You lose!");
    		process.exit();
    	}
    	process.stdout.write("Your Guess: ");
    }
});

