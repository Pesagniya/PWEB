const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const playerOptions = [rockBtn, paperBtn, scissorBtn];
const computerOptions = ['Pedra', 'Papel', 'Tesoura'];

const winner = (player, computer) => {

	const result = document.querySelector('.result');

	if (player == computer) 
		result.textContent = 'Empate';
	else if (player == 'Pedra') {
		if (computer == 'Papel') 
			result.textContent = 'Computer Win';
		else 
			result.textContent = 'Player Win';	
	}
	else if (player == 'Tesoura') {
		if (computer == 'Pedra') 
			result.textContent = 'AI Win';
		else 
			result.textContent = 'Player Win';
	}
	else if (player == 'Papel') {
		if (computer == 'Tesoura') 
			result.textContent = 'AI Win';
		else 
			result.textContent = 'Player Win';			
	}
};

playerOptions.forEach((option) => {
	option.addEventListener('click', function() {

		const choiceNumber = Math.floor(Math.random() * 3);
		const computerChoice = computerOptions[choiceNumber];

		winner(this.innerText, computerChoice);
	});
});