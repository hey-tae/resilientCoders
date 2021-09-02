//Create a function that grabs the number of snacks from the input and tells you to stop that many times



 document.querySelector('#help').addEventListener('click', stopTheSnacks)

function stopTheSnacks(){
    let numberOfSnacks = document.querySelector('input').value
    for(let i=0; i<numberOfSnacks; i++){
        document.querySelector('#stops').innerText += ' stop'
        console.log(i)
    }

}