let input = document.querySelector("input")
let addBTN = document.querySelector("button")
let listPersonne = document.querySelector("ul")
let namePlaceholder = document.querySelector("#name")


function handleAjout(){
    if(input.value == ""){
        alert("you should type something")
        return
    }
    let li = document.createElement("li")

    li.innerText = input.value;
    listPersonne.appendChild(li)
    input.value=""
    namePlaceholder.innerText= ""
}

function handleChange(){
    namePlaceholder.innerText = input.value
}




input.addEventListener("keyup",handleChange)


addBTN.addEventListener("click",handleAjout)