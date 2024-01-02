
function sayHello(name){
    console.log("hello "+name)
}

sayHello("Mohamed")

// fonction pred
function sayHelloWithAlert(){
    alert("Hello alert ")
}

//sayHelloWithAlert()

// window is a global variable



console.log(document)



// querySelector => selectionne un element avec le nom
// de la balise
/*
    let myTitle = document.querySelector("h1")
*/

// getElementById

let myTitle = document.querySelector("h1")
console.log(myTitle)
// returns the first element in a variable
let mytitles = document.querySelectorAll("h1") 
console.log(mytitles)
// returns all the elements with h1 in an array


mytitles[2].style.color = "red"
mytitles[2].style.backgroundColor= "blue"


// how to create an element 

let body = document.body

document.title = "dom manipulation using js"

// creating a html Node 
let h2 = document.createElement("h2")

h2.innerText = "H2 created with js"
h2.style.color = "orange"


body.appendChild(h2)

