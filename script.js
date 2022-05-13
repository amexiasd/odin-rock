
function computerPlay() {
	let plays = ['Rock', 'Paper', 'Scissors'];
	let rand = Math.floor(Math.random() * plays.length);
	return plays[rand];
}

function readplayer() {
let answer = prompt("Enter play:\n 1.Rock \n 2.Paper \n 3.Scissors \n");
	switch (answer) {
		case 1:return 'Rock';
			break;
		case 2:return 'Paper';
			break;
		case 3:return 'Scissors';
			break;

		default:"Pleae choose!"
	}
}

let cplay = computerPlay();
readplayer();
console.log(cplay);

