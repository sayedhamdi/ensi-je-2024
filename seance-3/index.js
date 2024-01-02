let todoInput = document.querySelector("#todo-input")

let addBtn = document.querySelector("#add-btn")

let todoList = document.querySelector(".todo-list")


let errorMsg = document.querySelector(".error-msg")

errorMsg.style.display = "none"
addBtn.addEventListener("click",addTodo)




todoInput.addEventListener("keypress",kifYenzel)

function kifYenzel(e){
    if(e.key == 'Enter'){
        addTodo()
    }
}



function addTodo(){
    let t = todoInput.value
    // verification de l'input

    if(t==""){
        errorMsg.style.display = "inline"
        todoInput.style.borderColor="red"
        return
    }
    errorMsg.style.display = "none"
    todoInput.style.borderColor="black"

    // ajout 
    let div = createTodo(t)

    todoList.appendChild(div)



    todoInput.value = ""





}


function createTodo(text){
    let div = document.createElement("div")
    let checkbox  = document.createElement("input")
    let span = document.createElement("span")
    let button = document.createElement("button")


    button.innerText = "X"
    span.innerText= text
    checkbox.type="checkbox"


    div.appendChild(checkbox) 
    div.appendChild(span)
    div.appendChild(button)
    div.classList.add("todo")
    
    return div

}