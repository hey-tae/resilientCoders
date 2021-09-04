let inputLeft = document.getElementById('input')
let inputRight = document.getElementById('output')
console.log(inputRight)
let result = document.getElementById('placeToPutResults')
let plusSign = document.getElementById('add')
let minusSign = document.getElementById('sub')
let divideSign = document.getElementById('divi')
let multiSign = document.getElementById('multi')
let clearSign = document.getElementById('clear')
let modSign = document.getElementById('modulus')

plusSign.addEventListener('click', addFunction)
minusSign.addEventListener('click', subFunction)
divideSign.addEventListener('click', divFunction)
multiSign.addEventListener('click', multiFunction)
modSign.addEventListener('click', modFunction)
clearSign.addEventListener('click', clearFunction)

function addFunction(){
    let sum = parseInt(inputLeft.value) + parseInt(inputRight.value)
    result.innerText = sum
}

function subFunction(){
    let difference = parseInt(inputLeft.value) - parseInt(inputRight.value)
    result.innerText = difference
}

function divFunction(){
    let quotient = parseInt(inputLeft.value) / parseInt(inputRight.value)
    result.innerText = quotient
}

function multiFunction(){
    let product = parseInt(inputLeft.value) * parseInt(inputRight.value)
    result.innerText = product
}

function modFunction(){
    let remainder = parseInt(inputLeft.value) % parseInt(inputRight.value)
    result.innerText = remainder
}

function clearFunction(){
    inputLeft.value = 0
    inputRight.value = 0
    result.innerText = ""
}

