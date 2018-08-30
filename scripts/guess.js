var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resultButton;

guessField.focus();

function checkGuess() {
	var userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = 'Previous guesses: ';
	}
	guesses.textContent += userGuess + ' ';

	if (userGuess === randomNumber) {
		lastResult.textContent = 'Congratulations! You got it right!';
		lastResult.style.backgroundColor = 'green';
		lowOrHigh.textContent = '';
		setGameOver();
	} else {
		lastResult.textContent = 'Wrong!';
		lastResult.style.backgroundColor = 'red';
		if (userGuess < randomNumber) {
			lowOrHigh.textContent = 'Too Low.';
		} else if (userGuess > randomNumber) {
			lowOrHigh.textContent = 'Too High.';
		}
	}

	guessCount++;
	guessField.value = '';
	guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Start new game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGeme);
}

function resetGame() {
	guessCount = 1;

	var resetParas = document.querySelectorAll('.resetParas p');
	for (var i = 0; i < resetParas.length; i++) {
		resetParas[i].textContent = '';
	}

	resultButton.parentNode.removeChild(resultButton);

	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();

	lastResult.style.backgroundColor = 'white';

	randomNumber = Math.floor(Math.random() * 100) + 1;
}