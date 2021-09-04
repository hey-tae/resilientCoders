
//variables
let botScore=0,
	playerScore=0;

const rock = document.getElementById('rock')
const scissors = document.getElementById ('scissors')
const paper = document.getElementById ('paper')
console.log(rock)


//functions and event listeners
rock.addEventListener('click', playerThrowsRock);
scissors.addEventListener('click', playerThrowsScissors)
paper.addEventListener('click', playerThrowsPaper)

function playerThrowsRock(){
	const botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsScissors(){
	const botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	const botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function getRandomWeapon(){
	const randomNumber= Math.ceil(Math.random()* 3) ;
	let botsWeapon ="rock";
	if(randomNumber === 1 ){
		botsWeapon="scissors";
	}else if(randomNumber === 2){
		botsWeapon="paper";
	}
	console.log('random number: ',randomNumber)
	console.log('random number: ',botsWeapon) ;
	return botsWeapon;
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
	playerScore+=1
	document.getElementById('humanScore').innerHTML = playerScore 
	displayCompleteMessage("I KNOW THATS RIGHT");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}