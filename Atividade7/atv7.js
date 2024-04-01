	const rockBtn = document.querySelector('.rock');
	const paperBtn = document.querySelector('.paper');
	const scissorBtn = document.querySelector('.scissor');
	const playerOptions = [rockBtn, paperBtn, scissorBtn];
	const computerOptions = ['rock', 'paper', 'scissors'];

	playerOptions.forEach((option) => {
			option.addEventListener('click', function() {

				const choiceNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText, computerChoice);
			});
		});

	const winner = (player, computer) => {
		const result = document.querySelector('.result');

		if (player == computer) 
			result.textContent = 'Empate';
		else if (player == 'rock') {
			if (computer == 'paper') 
				result.textContent = 'Computer Win';
			else 
				result.textContent = 'Player Win';	
		}
		else if (player == 'scissors') {
			if (computer == 'rock') 
				result.textContent = 'AI Win';
			else 
				result.textContent = 'Player Win';
		}
		else if (player == 'paper') {
			if (computer == 'scissors') 
				result.textContent = 'AI Win';
			else 
				result.textContent = 'Player Win';			
		}
	};