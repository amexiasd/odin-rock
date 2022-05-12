console.log('OK');

function computerPlay() {
	let plays = ['Rock', 'Paper', 'Scissors'];
	let rand = Math.floor(Math.random() * plays.length);
	console.log(rand);
	return plays[rand];
}

let cplay = computerPlay();
console.log(cplay);
