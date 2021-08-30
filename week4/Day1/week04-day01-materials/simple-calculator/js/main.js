let total = 0

document.querySelector('#dominosPizza').addEventListener('click', jumanji)


function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}
