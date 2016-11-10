// Computer selects random word from bank
var words = ["ballot", "swing state", "Democrat", "Republican", "Libertarian", "Green Party", "electoral college", "polling site"];
var s;
var guessCount = 10;
var userGuess = [];
var wins=0;
var currentWord;
var word = "abcd123456";
var wordLength = word.length;
var underscores = "";
for(i=0; i<wordLength; i++)  {
	underscores = underscores + "_ "
}

var randomWord = words[Math.floor(Math.random() * words.length)];
	console.log(randomWord)

// function gameText() {
// 	$('.gameText').append('<p id="wins">WINS:</p>');
// 	$('.gameText').append('<p id="counter">GUESSES LEFT:</p>');
// 	$('.gameText').append('<section id="answer"></section>');


// }


function winCount() {
	document.getElementById("wins").innerHTML = wins;
}

// function guessCount() {
// 	document.getElementById("counter").innerHTML = "Guesses left: " + guessCount;
// 		for (var i = 10; i > 0; i--) {
// 			guessCount[i];
// 		}
// }

// function getWord() {
// 	for (var i = 0; i < randomWord.length; i++) {
// 		answerArray[i] = "_";
// 	}

// 	s = answerArray.join(" ");
// 	document.getElementById("answer").innerHTML = s;

// }

document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	document.getElementById("letter").innerHTML = letter;
	if userGuess != arr.includes(searchElement === randomWord); {
		for (var i = 10; i > 0; i--); {
			document.getElementById("guessCount").innerHTML = guessCount-1;

		}
	}
}

// function startUp() {
// 	for (var i = 0; i < randomWord.length; i++) {
// 		answerArray[i] = "_";
// 	}

// 	s = answerArray.join(" ");
// 	document.getElementById("answer").innerHTML = s;
// }

function letter() {

	var letter = document.getElementById("letter").value;

	if (letter.length > 0) {
		for (var i = 0; i < randomWord.length; i++) {
			if (randomWord[i] === letter) {
				answerArray[i] = letter;
			}
		}
		count--;
		document.getElementById("counter").innerHTML = "Guesses left: " + count;
		document.getElementById("answer").innerHTML = answerArray.join(" ");
	}
}
