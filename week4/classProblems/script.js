// Variables
// Create a variable, reassign the value, add the value to the dom
let dogs = 'dogs'
//let newVariable = 

// Create a variable, multiply it by itself, replace a number in the dom with the new number from the multiplication

//let multipiedBySelf = 

// Functions
// Create a function that takes in one argument. That argument should be a Fahrenheit value to be converted to Celcius. Console log the converted value

function convertFarToCelc (num1){
    console.log(num1 * (9/5) + 32)
}

convertFarToCelc(25);
// Create a function takes in two arguments. Create a function that takes in one argument and alerts that value. Call the second function with an argument that is the sum from the original two argument function.

// Conditionals
// Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice

function randomChoice(){
    let num = Math.floor(Math.random() * 10 + 1
    if(num < 2){
        alert('rock')
    }else if(num < 4){
        alert('paper')
    }else if(num < 6){
        alert('spock')
    }else if(num < 8){
        alert('lizard')
    }else(alert('nope'))
}

randomChoice()

// Create a function that takes in two numbers. If the second number is divisible by the first, alert the product of those two numbers. If not, alert the sum of those two numbers.