var playHangman = confirm("Would you like to play HANGMAN?!");
var wordChoicesArr = ["sword", "shield", "buckler", "spear", "breastplate"];
var wins = 0;
var guessesRemaining = 12;
var lettersGuessed = [];
var wordChoices = wordChoicesArr[(Math.floor(Math.random() * wordChoicesArr.length))]; 
	console.log(wordChoices);

var answerArray = [];
	 for (var i = 0; i < wordChoices.length; i++) {
	 	answerArray[i] = "_";

	 document.querySelector("#word").innerHTML = answerArray.join(" ");
		 console.log(answerArray.join(" "));
	 }
		
document.onkeypress = function(event) {
//This grabs the input from the user and stores it	
	var	userguess = String.fromCharCode(event.keyCode).toLowerCase();
		 console.log(userguess);
//This grabs the guessed attempts and displays them in HTML
		lettersGuessed += " " + userguess + ",";
		document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
//This substracts the guesses remaining		
		guessesRemaining--;
//This displays the number of guesses remaining		
		document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
//If userguess equals a letter in the array then replace the "-" with the correct letter

for (var i = 0; i < wordChoices.length; i++) {
	if (userguess === wordChoices[i])	{
		answerArray[i] = wordChoices[i];
			document.querySelector("#word").innerHTML = answerArray.join(" ");
		}
	
}
}
