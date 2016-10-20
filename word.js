exports.checkMatch = function(guess, word) {
	var correct = false;
	for(var i = 0; i < word.guessedWord.length; i++) {
		if(guess.toLowerCase() == word.guessedWord[i].name.toLowerCase()) {
			word.guessedWord[i].guessed = true;
			correct = true;
		}
	}
	return correct;
};

