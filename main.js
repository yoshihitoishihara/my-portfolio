const background = document.getElementById("background")
const openButton = document.getElementById("open-button")
const closeButton = document.getElementById("close-button")

openButton.onclick = function() {
    background.classList.add("red")
}
  
closeButton.onclick = function() {
    background.classList.remove("red")
}