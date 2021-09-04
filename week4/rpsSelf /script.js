console.log('tae is testing')

// DOM Variables 
let rockBtn = document.getElementById('rock')
let paperBtn = document.getElementById('paper')
let scissorsBtn = document.getElementById('scissor')

console.log(scissorsBtn)

// Event Listeners
rockBtn.addEventListener('click', playerRock, getRandomWeapon)
paperBtn.addEventListener('click', playerPaper)
scissorsBtn.addEventListener('click', playerScissor)

//Functions
function playerRock(){
    console.log('rock')
    if(botsWeapon = getRandomWeapon()){
        console.log('loser')
    }else if(botsWeapon = getRandomWeapon()){
        console.log('winner')   
    }else if(botsWeapon = getRandomWeapon()){
        console.log('tie')
    }
}

function playerPaper(){
    console.log('paper')
}

function playerScissor(){
    console.log('scissors')
}

//Computer Choice
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



function zodiacFinder (){
    let button = document.getElementById('button');
    let input = document.getElementById('box').value
    let p = document.getElementsByClassName('textRowTwo');
    document.getElementById('input').value = '';
    

    if(input == 'Capricorn'){
        p.innerText = 'You are a hoe'
        console.log('cappy')
    }else if (input == 'Aquarius'){
        p.innerText = 'titty sweat'
        console.log('quay')
    } else{
        console.log('nah')
    }
}

button.addEventListener('click', zodiacFinder)