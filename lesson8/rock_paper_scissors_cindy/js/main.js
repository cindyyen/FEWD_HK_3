// just to test if the js is linked properly
// console.log("testing");

var humanScore = document.getElementById("humanScore");
var computerScore = document.getElementById("computerScore");
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var userInput;


document.getElementById("rock").onclick = playedRock;
document.getElementById("paper").onclick = playedPaper;
document.getElementById("scissors").onclick = playedScissors;


function getRobotInput() {
	var choices = {
		1: "rock",
		2: "paper",
		3: "scissors"
	};

	var randomNumber = Math.ceil(Math.random()*3);
	console.log(randomNumber);
	console.log(choices[randomNumber]);
}

function compare (userInput, computerInput) {
	if (
		(userInput == "scissors" && computerInput == "paper") ||
		(userInput == "rock" && computerInput == "scissors") ||
		(userInput == "paper" && computerInput == "rock") ||
		) {
		console.log("User Win");
	} else if (
		(computerInput == "scissors" && userInput == "paper") ||
		(computerInput == "rock" && userInput == "scissors") ||
		(computerInput == "paper" && userInput == "rock") ||
		) {
		console.log("User lose");
	} else {
		console.log("Draw");
	}
}


function playedRock(){
	userInput = "rock";
	console.log(userInput);
	compare (userInput, getRgiPobotInput());
}

function playedPaper(){
	userInput = "paper";
	console.log(userInput);
	compare (userInput, getRobotInput());
}

function playedScissors(){
	userInput = "scissors";
	console.log(userInput);
	compare (userInput, getRobotInput());
}
// computer picks from r/p/s

// compare computer pick and human pick

// 