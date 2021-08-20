// Variable declaration
const userScore = document.querySelector('.user-score p');
const computerScore = document.querySelector('.computer-score p');
const buttons = document.querySelectorAll('button')
const userHand = document.querySelector('.user-hand');
const computerHand = document.querySelector('.computer-hand');
const board = document.querySelector('.board');
const result = document.querySelector('h3');
let userCount = 0;
let computerCount = 0;
let computerChoice = '';
let userChoice = '';
const OPTIONS = {
	rock: 'rock',
	paper: 'paper',
	scissors: 'scissors'
}

const play = () => {
	buttons.forEach(button => 
		button.onclick = () => {
		result.textContent = '🤨';
		computerHand.src = './assets/piedra_computadora.png';
		userHand.src = './assets/piedra_ada.png';
		board.classList.add('playing');
		defineOutcome(button)
	})
}

play()

const defineOutcome = (item) => {
	setTimeout(() => {
		board.classList.remove('playing');
		if (item.id === OPTIONS.rock) {
			userChoice = OPTIONS.rock;
			userHand.src = './assets/piedra_ada.png';
		} else if (item.id === OPTIONS.paper) {
			userChoice = OPTIONS.paper;
			userHand.src = './assets/papel_ada.png';
		} else {
			userChoice = OPTIONS.scissors;
			userHand.src = './assets/tijera_ada.png';
		}
		getComputerChoice(computerHand);
		getResult(computerChoice, userChoice);
	}, 2000)
}

const getComputerChoice = (playerHand) => {
	let randomNum = Math.floor(Math.random() * 3);
	if (randomNum == 0) {
		computerChoice = OPTIONS.rock;
		playerHand.src = './assets/piedra_computadora.png';
	} else if (randomNum == 1) {
		computerChoice = OPTIONS.paper;
		playerHand.src = './assets/papel_computadora.png';
	} else {
		computerChoice = OPTIONS.scissors;
		playerHand.src = './assets/tijera_computadora.png';
	}
};

const getResult = (optPlayerOne, optPlayerTwo) => {
	if (optPlayerOne !== userChoice) {
		if (optPlayerOne === OPTIONS.rock && optPlayerTwo === OPTIONS.scissors || optPlayerOne === OPTIONS.paper && optPlayerTwo === OPTIONS.rock || optPlayerOne === OPTIONS.scissors && optPlayerTwo === OPTIONS.paper) {
			computerCount++
			computerScore.textContent = computerCount;
			result.textContent = 'You lost 😞';
		} else {
			userCount++
			userScore.textContent = userCount;
			result.textContent = 'You won! 😃';
		}
	} else result.textContent = 'Tie! 😐';
};
