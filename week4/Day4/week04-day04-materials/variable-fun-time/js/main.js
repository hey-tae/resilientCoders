//--- Easy
//create a variable and assign it a number
let age = 28
//minus 10 from that number
let difference = age-10
//print that number to the console
console.log(difference)
//--- Medium
//create a variable that holds a value from the input
let inputValue = document.querySelector('input').value
//add 25 to that number
let sum = inputValue + 25
//alert that number
alert('sum')
//--- Hard
//create a variable that holds the h1
let title = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
title.addEventListener('click', sumOfVariables )

function sumOfVariables(){
    let newTotal = difference + sum
    console.log('newTotal')
}