var botScore=0,
	playerScore=0;

	// dom variables
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

	// event listeners
rock.addEventListener('click', playerThrowsRock)
paper.addEventListener('click', playerThrowsPaper)
scissors.addEventListener('click', playerThrowsScissors)

	// functions
function playerThrowsRock(){
	var botsWeapon="paper";//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	console.log('working')
}
function playerThrowsScissors(){
	var botsWeapon ='rock'
	checkWhoWon(botsWeapon, 'scissors')
}
function playerThrowsPaper(){
	var botsWeapon ='scissors'
	checkWhoWon(botsWeapon, 'paper')

}

function getRandomWeapon(){
	var compChoice = Math.random();
	var botsWeapon = 'scissors'
if (compChoice < 0.34) {
    botsWeapon = "rock";
} else if(compChoice <= 0.67) {
    botsWeapon = "paper";
}
return botsWeapon
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}






// function getRandomWeapon(){
// 	var randomNumber= Math.random()
// 	var botsWeapon="rock";
// 	if(randomNumber<1){
// 		botsWeapon="scissors";
// 	}
// 	else if(randomNumber<2){
// 		botsWeapon="paper";
// 	}
// 	return botsWeapon;
//}



// User choice
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// if (! userChoice) {
//     // User choice was undefined
//     document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
// } else {
//     // Display user choice
//     document.write("<p>Player 1:" + " " + userChoice + "</p>");
// }

// // computer choice - stack overflow 
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }

// // Display computer choice
// document.write("<p>Computer:" + " " + computerChoice + "</p>");
// // Compare user choice vs computer choice
// var compare = function(choice1,choice2) {
//     if (choice1 === choice2) {
//         tie+=1;
//         return "It's a tie!";
//     }
//     if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             // rock wins
//             win+=1;
//             return "You win!";
//         } else {
//             // paper wins
//             loss+=1;
//             return "You lose! Try again.";
//         }
//     }
//     if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             // paper wins
//             win+=1;
//             return "You win!";
//         } else {
//             // scissors wins
//             loss+=1;
//             return "You lose! Try again.";
//         }
//     }
//     if (choice1 === "scissors") {
//         if (choice2 === "rock") {
//             // rock wins
//             loss+=1;
//             return "You lose! Try again.";
//         } else {
//             // scissors wins
//             win+=1;
//             return "You win!";
//         }
//     }