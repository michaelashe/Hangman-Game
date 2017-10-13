

var playHangman = confirm("Would you like to play HANGMAN?!");
var wordChoicesArr = ["sword", "shield", "buckler", "spear", "helm"];
var wins = 0;
var guessesRemaining = 8;
var lettersGuessed = [];
var wordChoices = wordChoicesArr[(Math.floor(Math.random() * wordChoicesArr.length))]; 
	console.log(wordChoices);

var answerArray = [];
	 for (var i = 0; i < wordChoices.length; i++) {
	 	answerArray.toString();
	 	answerArray[i] = "__";
	 	wordChoices.toString();


	document.querySelector("#word").innerHTML = answerArray.join(" ");
	console.log(answerArray.join(" "));

	document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
	 }

	 

		
document.onkeypress = function(event) {
	var letter = false;
//This grabs the input from the user and stores it	
	var	userguess = String.fromCharCode(event.keyCode).toLowerCase();
		 console.log(userguess);
//This grabs the guessed attempts and displays them in HTML
		lettersGuessed += " " + userguess + ",";
		document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;	
//If userguess equals a letter in the array then replace the "-" with the correct letter
	for (var i = 0; i <= answerArray.length; i++) {
         var bwLetters = answerArray[i];
                
       //prevent double typing a letter
          if (userguess === bwLetters) {  
          alert("You've already pressed " + userguess);
          wins = wins -1;
                 } 
            }

	for (var i = 0; i < wordChoices.length; i++) {
	if (userguess === wordChoices[i])	{
		answerArray[i] = wordChoices[i];
		document.querySelector("#word").innerHTML = answerArray.join(" ");
		letter = true;	

		}
	}
	if (letter === false) {
		guessesRemaining--;
		document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
		console.log("true or false: "+ letter);

	}

	if (letter === true) {
		wins++;
		//document.querySelector("#winsCounter").innerHTML = wins;
		console.log("true or false: "+ letter);
		console.log("wins " + wins);
	}

	if (wins === wordChoices.length) {
		//document.querySelector("#winsCounter").innerHTML = wins;
		document.querySelector("#WinGame").innerHTML = "YOU WON!!";
	}

//If user guesses all the letters in the word, the game stops, gives WiN message then restarts
	if (guessesRemaining === 0) {
		document.querySelector("#WinGame").innerHTML = "YOU LOST!!!  Refresh to try again!";
		
	}



}


