//testing script link
//console.log(4+4)


//STEPS:
//enter task into input field
//press 'add' button 
//task will be added to list with checkbox
//select checkbox and click 'clear completed' button to remove that item from list || press clear whole list to remove all list items 



//DOM HANDLERS
let input = document.getElementById('newTask')
let addTaskBtn = document.getElementById('addNewTask')
let taskList = document.getElementById('taskItems')
let tasksRemaining = document.getElementById('tasksRemaining')
let wholeClearBtn = document.getElementById('clearWholeList')
let singleClearBtn = document.getElementById('clearSingleTask')
let counter = 0


//FUNCTIONS

//functions needed:
// - add task function 

function addNewTask (){
    let taskItem = document.createElement('li')
    taskItem.classList.add('completed')
    
    taskItem.innerText = input.value
    console.log(taskItem.value)
    taskList.appendChild(taskItem)
    console.log(taskItem)
    input.value = ""
    
    // - checkbox/strikethrough
    // let check = document.createElement('a')
    // check.innerHTML = '<i class="fal fa-square"></i>'
    // taskItem.appendChild(check)
    

}

function clearAllItems (){
    taskList.remove()
}
// - clear completed list
// - clear whole list

function completedTask(){
    taskItem.classList.toggle('completed')
}



//EVENT LISTENERS 

addTaskBtn.addEventListener('click', addNewTask)
wholeClearBtn.addEventListener('click', clearAllItems)
taskItem.addEventListener('click', completedTask)