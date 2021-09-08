//console.log(4+4) testing script link

//instructions 
//Create three boxes in your HTML / CSS - DONE
//Click on a box and have it rotate (45+ degrees each click) - DONE
//On the third click of each box change the color of the other two boxes - DONE
//On a click of a box, turn that box into a circle and have it move to the right

// DOM HANDLERS
let leftBox = document.getElementById('boxLeft')
let middleBox = document.getElementById('boxMiddle')
let rightBox = document.getElementById('boxRight')
let count = 0
let degree = 0
//console.log(middleBox)


//FUNCTIONS
function leftBoxRotate(){
    count ++
    degree += 45
    leftBox.style.transform = "rotate("+degree+"deg"
    console.log('count is: '+ count)
    console.log('degree is '+ degree)
    leftBox.style.borderRadius = '50%'
    middleBox.style.borderRadius = '0'
    rightBox.style.borderRadius = '0'
    //leftBox.style.backgroundColor = 'yellow'
    if(count % 3 == 0){
        middleBox.style.backgroundColor = 'pink'
        rightBox.style.backgroundColor = 'purple'
    } else{
        middleBox.style.backgroundColor = 'white'
        rightBox.style.backgroundColor = 'white'
}

}

function middleBoxRotate (){
    count ++
    degree += 45
    middleBox.style.transform = "rotate("+degree+"deg"
    console.log('count is: '+ count)
    console.log('degree is '+ degree)
    middleBox.style.borderRadius = '50%'
    leftBox.style.borderRadius = '0'
    rightBox.style.borderRadius = '0'
    if(count % 3 == 0){
        leftBox.style.backgroundColor = 'pink'
        rightBox.style.backgroundColor = 'purple'
    } else{
        leftBox.style.backgroundColor = 'white'
        rightBox.style.backgroundColor = 'white'
}
}

function rightBoxRotate (){
    count ++
    degree += 45
    rightBox.style.transform = "rotate("+degree+"deg)"
    console.log('count is: '+ count)
    console.log('degree is '+ degree)
    rightBox.style.borderRadius = '50%'
    middleBox.style.borderRadius = '0'
    leftBox.style.borderRadius = '0'
    //leftBox.style.backgroundColor = 'yellow'
    if(count % 3 == 0){
        middleBox.style.backgroundColor = 'pink'
        leftBox.style.backgroundColor = 'purple'
    } else{
        middleBox.style.backgroundColor = 'white'
        leftBox.style.backgroundColor = 'white'
}
}


//EVENT LISTENERS & FUNCTION CALLS
leftBox.addEventListener('click', leftBoxRotate)
middleBox.addEventListener('click', middleBoxRotate)
rightBox.addEventListener('click', rightBoxRotate)