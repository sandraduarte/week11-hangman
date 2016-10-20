exports.letter = function(letter) {
	this.name = letter;
	this.guessed = false;
	this.display = function() {
		if(this.name == "." || this.name == " " || this.name == "'") {
			return this.name;
		}
		if(this.guessed){
			return this.name;
		}
		else {
			return "_";
		}
	};
};