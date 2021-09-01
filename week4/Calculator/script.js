// DOM Variables
let inputLeft = document.querySelector('#inputLeft')
let inputRight = document.querySelector('#inputRight')
let results = document.querySelector('#result')
let clear = document.querySelector('#clear')
let minusBtn = document.querySelector('#minus')
let plusBtn = document.querySelector('#plus')
let timesBtn = document.querySelector('#times')
let divideBtn = document.querySelector('#divide')
let modBtn = document.querySelector('#mod')

// Event Handlers
clear.addEventListener('click', clearResult)
minusBtn.addEventListener('click', subtract)
plusBtn.addEventListener('click', add)
timesBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
modBtn.addEventListener('click', modulus)

// Functions

function clearResult(){
    inputLeft.value = 0
    inputRight.value = 0
    result.innerText = ""
}

function subtract(){
    let product = parseInt(inputLeft.value) - parseInt(inputRight.value)
    results.innerText = product
    console.log(product) 
}

function add(){
    let sum = parseInt(inputLeft.value) + parseInt(inputRight.value)
    results.innerText = sum
    console.log(sum) 
}

function multiply (){
    let product = parseInt(inputLeft.value) * parseInt(inputRight.value)
    results.innerText = product
    console.log(product) 
}

function divide(){
    let quotient = parseInt(inputLeft.value) / parseInt(inputRight.value)
    results.innerText = quotient
    console.log(quotient) 
}

function modulus(){
    let percent = parseInt(inputLeft.value) % parseInt(inputRight.value)
    results.innerText = percent
    console.percent(quotient) 

}