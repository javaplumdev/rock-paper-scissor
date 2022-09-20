const scoring = document.querySelector('.scoring');
const userScore = document.querySelector('.user-score');
const aiScore = document.querySelector('.ai-score');
const aiResult = document.querySelector('.ai-result');
const userResult = document.querySelector('.user-result');
const rock = document.querySelector('.rock ');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

const choices = ['Rock', 'Paper', 'Scissor'];

let score = 0;
let aiUserScore = 0;

const pickRock = () => {
	const aiPick = choices[Math.floor(Math.random() * choices.length)];

	userResult.innerText = 'Rock';
	aiResult.innerText = aiPick;

	// When the user picks rock
	if (aiPick === 'Scissor') {
		score++;
		userScore.innerText = `User: ${score}`;
	} else if (aiPick === 'Paper') {
		aiUserScore++;
		aiScore.innerText = `AI: ${aiUserScore}`;
	} else {
		console.log('Tie');
	}
};

const pickPaper = () => {
	const aiPick = choices[Math.floor(Math.random() * choices.length)];

	userResult.innerText = 'Paper';
	aiResult.innerText = aiPick;

	// When the user picks paper
	if (aiPick === 'Rock') {
		score++;
		userScore.innerText = `User: ${score}`;
	} else if (aiPick === 'Scissor') {
		aiUserScore++;
		aiScore.innerText = `AI: ${aiUserScore}`;
	} else {
		console.log('Tie');
	}
};

const pickScissor = () => {
	const aiPick = choices[Math.floor(Math.random() * choices.length)];

	userResult.innerText = 'Scissor';
	aiResult.innerText = aiPick;

	// When the user picks scissor
	if (aiPick === 'Paper') {
		score++;
		userScore.innerText = `User: ${score}`;
	} else if (aiPick === 'Rock') {
		aiUserScore++;
		aiScore.innerText = `AI: ${aiUserScore}`;
	} else {
		console.log('Tie');
	}
};

rock.addEventListener('click', pickRock);
paper.addEventListener('click', pickPaper);
scissor.addEventListener('click', pickScissor);
