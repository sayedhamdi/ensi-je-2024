let h1 = document.querySelector("h1")

h1.style.color = "red"
h1.style.background = "blue"

let liElements = document.querySelectorAll("li")


liElements[2].remove()

let newElement = document.createElement("li")
newElement.innerText = "new element"
newElement.style.color = "orange"


let ul = document.querySelector("ul")

ul.appendChild(newElement)

console.log(h1)