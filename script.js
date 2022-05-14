function computerPlay() {
	let plays = ['Rock', 'Paper', 'Scissors'];
	let rand = Math.floor(Math.random() * plays.length);
	return plays[rand];
}

function readplayer() {
	let word = '';
	let answer = +prompt('Enter play:\n 1.Rock \n 2.Paper \n 3.Scissors \n');
	switch (answer) {
		case 1:
			word = 'Rock';
			break;
		case 2:
			word = 'Paper';
			break;
		case 3:
			word = 'Scissors';
			break;
		default:
			word = 'Please Choose!';
	}

	return word;
}

let cplay = computerPlay();
console.log(readplayer());
