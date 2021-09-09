// Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet

// NEED TO INCLUDE
//5 items per reel x 3 reel (15 items)
// bet min buttom ($5) / bet max button ($50)
// output for total that updates based on win/loss
//start with $1000
//winning combos / win = 10x bet

//VARIABLES & DOM HANDLERS
//totalMoney var  - output for total 
let reelLeft = document.getElementById('reelLeft')
let reelMiddle = document.getElementById('reelMiddle')
let reelRight = document.getElementById('reelRight')
let minBtn = document.getElementById('minBet')
let maxBtn = document.getElementById('maxBet')
let totalDisplay = document.getElementById('totalMoney')

//FUNCTIONS
//event min (function)



//checkForWin (function) that compares the 3 reels 
//conditional statement for a win/loss
//if(won){
   // addMoneyTotal (function)
//}else {
    //removeMoneyTotal (function)
//}

//event max (function)
//checkForWin (function) that compares the 3 reels 
//conditional statement for a win/loss
//if(won){
   // addMoneyTotal (function)
//}else {
    //removeMoneyTotal (function)
//}

//checkForWin (function)
function randomNumber(){
    let reel1 =  Math.floor(Math.random() * 5)
    console.log('number is '+ reel1)

}

 randomNumber()
 randomNumber()
 randomNumber()
 randomNumber()
 randomNumber()


//need to get random number from each reel using math.random 3 times
//conditional statement to show win or loss based on combo
//if(reel1 === reel2 && reel2 === reel3){
//    return true
//}else{
//    return false
//}

//EVENT LISTENERS