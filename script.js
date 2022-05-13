
function computerPlay() {
	let plays = ['Rock', 'Paper', 'Scissors'];
	let rand = Math.floor(Math.random() * plays.length);
	return plays[rand];
}

function readplayer() {
let answer = prompt("Enter play:\n 1.Rock \n 2.Paper \n 3.Scissors \n");
console.log(answer);
}

let cplay = computerPlay();
readplayer();
console.log(cplay);
