//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.


// Pull functions from other files
var readline = require('readline');
var word = require("./word.js");
var game = require("./game.js");



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


console.log("Let's play Presidential Hangman!");
console.log("Guess a President!");
console.log("--------------------");
console.log("Guesses left: " + newGame.guessCount);
newGame.printProgress();
process.stdout.write("Your Guess: ");

rl.on('line', function(line){
	// Check for a valid input
	if(line.trim().length != 1 ) {
		console.log("Please guess a letter");
		process.stdout.write("Your Guess: ");
	}
	else {
    	guessedLetter = line.trim();
    	// Check duplicate guess
    	if(newGame.checkLetter(guessedLetter) === true) {
    		console.log("You already guessed this letter. Guess again");
    		console.log("You've got " + newGame.guessCount + " guesses left.");
    		newGame.printProgress();
    		process.stdout.write("Your Guess: ");
    		return;
    	}
    	// Check if current guess is correct
    	if(word.checkMatch(guessedLetter, newGame)) {
    		console.log("Aww Snap! You got one!");
    	}
    	else {
    		console.log("Nope. Try again!");
    		newGame.guessCount--;
    	}
    	console.log("You've got " + newGame.guessCount + " guesses left.");
    	newGame.printProgress();
    	console.log();
    	
    	// Check if all letters were correctly guessed
    	if(newGame.checkWord()) {
    		console.log("Woo Hoo! You had " + newGame.guessCount + " guesses left, but who needs 'em - YOU WON!");
    		process.exit();
    	}
    	if(newGame.guessCount <= 0) {
    		console.log("SORRY! No more guesses. You lost!");
    		process.exit();
    	}
    	process.stdout.write("You guessed: ");
    }
});

