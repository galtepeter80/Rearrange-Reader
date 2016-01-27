
function rearrange(word) {
	
	// instance variables
	var scramble = "";
	var insideLetters = "";
	
	// iterate through entire word
	for (var i = 0; i < word.length; i++) {
		
		// add the first letter
		if (i == 0) {
			scramble += word[i];
		}
		
		// add the scrambled middle letters, then the last
		else if (i == (word.length - 1)) {
			scramble += randomize(insideLetters);
			scramble += word[i];
		}
		
		// add found middle letters to randomizer
		else {
			insideLetters += word[i];
		}
	}
	
	// return scrambled word
	return scramble;
}

function randomize(insideLetters) {
	
	// spawn variables
	var copy = insideLetters;
	var replace = "";
	var newWord = [];	
	
	// copies the string into an array 
	for (var i = 0; i < copy.length; i++) {
		newWord[i] = copy[i];
	}
	
	// iterate through entire word
	for (var i = 0; i < copy.length; i++) {
		
			// generate a random number of word.length
			var n = Math.floor(Math.random() * copy.length);
			
			// swap letters
			var tmp = newWord[i];
			newWord[i] = newWord[n];
			newWord[n] = tmp;
			
	}
	
	// concatenates array back into a string
	for (var i = 0; i < copy.length; i++) {
		replace += newWord[i];
	}
	
	// return word
	return replace;
}

function parseText(text) {
	
	// begin new word
	var word = "";
	
	// begin new text
	var newText = "";
	
	// iterate over entire text length
	for (var i = 0; i < text.length; i++) {
		
		// check for a letter, if so we've found a word
		var asciiCode = text[i].charCodeAt(0);
		
		if (((asciiCode >= 97) && (asciiCode <= 122)) || ((asciiCode >= 65) && (asciiCode <= 90))){
			word += text[i];
			if (i == (text.length - 1)) {
				newText += rearrange(word.toLowerCase());
			}
		}
		
		// anything else, word finished, pass value
		else {
			newText += rearrange(word.toLowerCase());
			newText += text[i];
			word = "";
			
		}
	}
	
	return newText;
}

function process() {
	var passage = document.getElementById("textinput");
	var cipher = parseText(passage.value);
	document.getElementById("textinput").value = cipher;
}